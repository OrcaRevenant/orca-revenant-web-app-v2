import { AsyncCatchError } from "@/api/core/error/decorator";
import type * as Types from "@/api/core/interface";
import { Portfolio } from "@/api/core/interface";
import * as service from "@/api/revenant";
import { UTCTimestamp } from "lightweight-charts";

function serializePortfolioStatus(
  status: service.GetPortfolioStatusResponse["data"][`status`]
): Types.PortfolioStatus {
  switch (status) {
    case "active":
      return "connected";
    case "inactive":
      return "disconnected";
    case "syncing":
      return "syncing";
    default:
      return "unknown";
  }
}

function serializePortfolio(
  portfolio: service.PopulatedPortfolio
): Types.ConnectedPortfolio {
  return {
    id: `${portfolio.id}`,
    assets: portfolio.assets,
    connection: {
      name: portfolio.connection.name,
      logo: portfolio.connection.logo,
    },
    name: portfolio.title,
    value: portfolio.value,
    type: "portfolio",
    status: serializePortfolioStatus(portfolio.status),
    order: 0,
  };
}

function serializeGroup(group: service.PortfolioGroup): Types.Group {
  return {
    id: `${group.id}`,
    name: group.title,
    uniqueAssets: group.unique_assets,
    value: group.total_value,
    color: group.color,
    type: "group",
    order: 0,
    children: group.children.map(serializePortfolioOrGroup),
  };
}

function serializePortfolioOrGroup(
  portfolio: service.PopulatedPortfolio | service.PortfolioGroup
): Types.ConnectedPortfolio | Types.Group {
  return portfolio.type === "portfolio"
    ? serializePortfolio(portfolio)
    : serializeGroup(portfolio);
}

function serializeTransaction(
  transaction: service.Transaction
): Types.Transaction {
  return {
    id: transaction.id,
    asset: {
      name: transaction.asset.name,
      shortName: transaction.asset.symbol,
      logo: transaction.asset.logo,
    },
    createdAt: transaction.time,
    type: transaction.type,
    amount: transaction.amount,
    price: transaction.value,
    portfolio: {
      logo: transaction.portfolio.connection.logo,
      name: transaction.portfolio.title,
      balance: transaction.portfolio_total_value,
      connection: transaction.portfolio.connection.name,
    },
  };
}

function serializeAsset(asset: service.Asset): Types.Asset {
  return {
    amount: Number(asset.amount),
    change: {
      amount: asset.change,
      percentage: asset.change_percentage,
    },
    name: asset.asset.name,
    shortName: asset.asset.symbol,
    value: asset.value,
    logo: asset.asset.logo,
  };
}

export default class PortfolioService extends Portfolio {
  @AsyncCatchError()
  async generateAdvice(
    params: Types.GenerateAdvice
  ): Promise<Types.GenerateAdviceResponse> {
    const response = await service.generateAdvice({
      param: {
        id: params.payload.id,
      },
      payload: {
        messages: params.payload.messages,
        userLocation: params.payload.userLocation,
      },
      query: {
        quote: params.payload.quote,
        type: params.payload.type,
      },
    });

    return response.data;
  }

  @AsyncCatchError()
  async getPortfolioStatus(
    params: Types.GetPortfolioStatus
  ): Promise<Types.GetPortfolioStatusResponse> {
    const response = await service.getPortfolioStatus({
      param: {
        id: params.payload.id,
      },
    });

    return serializePortfolioStatus(response.data.status);
  }

  @AsyncCatchError()
  async createPortfolio(
    params: Types.CreatePortfolio
  ): Promise<Types.CreatePortfolioResponse> {
    const response = await service.createPortfolio({
      payload: {
        meta: params.payload.meta,
        color: params.payload.color!,
        connection: params.payload.connectionId,
        title: params.payload.name,
      },
    });

    const portfolio = response.data || {};

    return serializePortfolio(portfolio);
  }

  @AsyncCatchError()
  async removePortfolio(
    params: Types.RemovePortfolio
  ): Promise<Types.RemovePortfolioResponse> {
    await service.deletePortfolio({
      param: {
        id: params.payload.id,
      },
    });

    return;
  }

  @AsyncCatchError()
  async updatePortfolio(
    params: Types.UpdatePortfolio
  ): Promise<Types.UpdatePortfolioResponse> {
    const response = await service.updatePortfolio({
      param: {
        id: params.payload.id,
      },
      payload: {
        color: params.payload.color!,
        title: params.payload.name,
      },
    });

    const portfolio = response.data || {};

    return serializePortfolio(portfolio);
  }

  @AsyncCatchError()
  async getPortfolioById(
    params: Types.GetPortfolioById
  ): Promise<Types.GetPortfolioByIdResponse> {
    const response = await service.getPortfolioById({
      param: {
        id: params.payload.id,
      },
    });

    const portfolio = response.data || {};

    return serializePortfolio(portfolio);
  }

  @AsyncCatchError()
  async getPortfolios(
    params: Types.GetPortfolios
  ): Promise<Types.GetPortfoliosResponse> {
    const response = await service.getPortfolios({
      query: {
        quote: params.payload.quote,
      },
    });
    return {
      portfolios: response.data.groups.map(serializePortfolioOrGroup),
      stats: {
        assets: response.data.stats.unique_assets,
        totalValue: response.data.stats.total_value,
      },
    };
  }

  @AsyncCatchError()
  async getTransactions(
    params: Types.GetTransactions
  ): Promise<Types.GetTransactionsResponse> {
    const response = await service.getTransactions({
      param: {
        id: params.payload.id,
      },
      query: {
        page: params.payload.page,
        limit: params.payload.limit,
        type: params.payload.type,
        quote: params.payload.quote,
      },
    });

    const transasctions = response.data.list || [];
    const meta = response.data?.meta || {};

    return {
      data: transasctions.map(serializeTransaction),
      pagination: {
        currentPage: meta.page,
        limit: meta.limit,
        total: meta.total,
      },
    };
  }

  @AsyncCatchError()
  async getAssets(params: Types.GetAssets): Promise<Types.GetAssetsResponse> {
    const response = await service.getAssets({
      param: {
        id: params.payload.id,
      },
      query: {
        page: 1,
        limit: 10,
        type: params.payload.type,
        quote: params.payload.quote,
      },
    });

    const assets = response.data.list || [];
    // const meta = response.data?.meta || {};

    return assets.map(serializeAsset);
  }

  @AsyncCatchError()
  async getBalance(
    params: Types.GetBalance
  ): Promise<Types.GetBalanceResponse> {
    const response = await service.getBalance({
      param: {
        id: params.payload.id,
      },
      query: {
        type: params.payload.type,
        quote: params.payload.quote,
      },
    });

    return {
      balance: response.data?.balance,
    };
  }

  @AsyncCatchError()
  async getPortfolioValueOverTime(
    params: Types.GetPortfolioValueOverTime
  ): Promise<Types.GetPortfolioValueOverTimeResponse> {
    const response = await service.getBalanceHistory({
      param: {
        id: params.payload.id,
      },
      query: {
        timeframe: params.payload.timeframe,
        type: params.payload.type,
        quote: params.payload.quote,
      },
    });

    if (!response?.data) {
      return [];
    }

    return response.data.map((point) => ({
      time: (new Date(point.time).getTime() / 1000) as UTCTimestamp,
      value: Number(point.total_value),
    }));
  }

  @AsyncCatchError()
  async getAssetAllocation(
    params: Types.GetAssetAllocation
  ): Promise<Types.GetAssetAllocationResponse> {
    const response = await service.getAssetAllocation({
      param: {
        id: params.payload.id,
      },
      query: {
        type: params.payload.type,
        quote: params.payload.quote,
      },
    });

    if (!response?.data) {
      return [];
    }

    return response.data
      .filter((asset) => asset?.asset)
      .map((asset) => ({
        id: asset.asset.symbol,
        label: asset.asset.name,
        value: asset.percentage,
      }));
  }

  @AsyncCatchError()
  async getPortfolioAllocation(
    params: Types.GetPortfolioAllocation
  ): Promise<Types.GetPortfolioAllocationResponse> {
    const response = await service.getAllocation({
      param: {
        id: params.payload.id,
      },
      query: {
        type: params.payload.type,
        quote: params.payload.quote,
      },
    });

    if (!response?.data) {
      return [];
    }

    return response.data
      .filter((portfolio) => portfolio?.portfolio)
      .map((portfolio) => ({
        id: `${portfolio.portfolio.id}`,
        label: portfolio.portfolio.title,
        value: portfolio.percentage,
      }));
  }

  @AsyncCatchError()
  async getAssetPerformance(
    params: Types.GetAssetPerformance
  ): Promise<Types.GetAssetPerformanceResponse> {
    const response = await service.getAssetPerformance({
      param: {
        id: params.payload.id,
      },
      query: {
        type: params.payload.type,
        timeframe: params.payload.timeframe,
        quote: params.payload.quote,
        performanceType: params.payload.performance,
      },
    });

    const asset = response.data || {};

    return {
      shortName: asset.asset.symbol,
      name: asset.asset.name,
      logo: asset.asset.logo,
      change: {
        amount: asset.price_change,
        percentage: asset.percentage_change,
      },
    };
  }

  @AsyncCatchError()
  async getAssetPerformanceOverTime(
    params: Types.GetAssetPerformanceOverTime
  ): Promise<Types.GetAssetPerformanceOverTimeResponse> {
    const response = await service.getAssetPerformanceOverTime({
      param: {
        symbol: params.payload.assetName,
      },
      query: {
        timeframe: params.payload.timeframe,
        quote: params.payload.quote,
      },
    });

    return response.data.map((point) => ({
      time: (new Date(point.time).getTime() / 1000) as UTCTimestamp,
      value: Number(point.price),
    }));
  }

  @AsyncCatchError()
  async updatePortfolioListOrder(
    params: Types.UpdatePortfolioListOrder
  ): Promise<Types.UpdatePortfolioListOrderResponse> {
    await service.reorderPortfolioGroups({
      payload: {
        items: params.payload.items.map((item) => ({
          id: item.id,
          type: item.type,
          order: item.order,
        })),
      },
    });

    return;
  }
}
