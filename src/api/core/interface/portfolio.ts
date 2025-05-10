import { CurrencyAmount } from "./api";

export abstract class Portfolio {
  abstract getTransactions(
    params: GetTransactions
  ): Promise<GetTransactionsResponse>;

  abstract getAssets(params: GetAssets): Promise<GetAssetsResponse>;

  abstract getStatistics(params: GetStatistics): Promise<GetStatisticsResponse>;

  abstract getAssetAllocation(
    params: GetAssetAllocation
  ): Promise<GetAssetAllocationResponse>;

  abstract getPortfolioAllocation(
    params: GetPortfolioAllocation
  ): Promise<GetPortfolioAllocationResponse>;

  abstract getAssetPerformance(
    params: GetAssetPerformance
  ): Promise<GetAssetPerformanceResponse>;

  abstract getAssetPerformanceOverTime(
    params: GetAssetPerformanceOverTime
  ): Promise<GetAssetPerformanceOverTimeResponse>;

  abstract getPortfolios(params: GetPortfolios): Promise<GetPortfoliosResponse>;

  abstract getPortfolioById(
    params: GetPortfolioById
  ): Promise<GetPortfolioByIdResponse>;

  abstract getPortfolioValueOverTime(
    params: GetPortfolioValueOverTime
  ): Promise<GetPortfolioValueOverTimeResponse>;

  abstract createPortfolio(
    params: CreatePortfolio
  ): Promise<CreatePortfolioResponse>;

  abstract removePortfolio(
    params: RemovePortfolio
  ): Promise<RemovePortfolioResponse>;

  abstract updatePortfolio(
    params: UpdatePortfolio
  ): Promise<UpdatePortfolioResponse>;

  abstract updatePortfolioListOrder(
    params: UpdatePortfolioListOrder
  ): Promise<UpdatePortfolioListOrderResponse>;

  abstract getPortfolioStatus(
    params: GetPortfolioStatus
  ): Promise<GetPortfolioStatusResponse>;

  abstract generateAdvice(
    params: GenerateAdvice
  ): Promise<GenerateAdviceResponse>;
}

export type PortfolioStatus =
  | `connected`
  | `disconnected`
  | `syncing`
  | `unknown`;

export type ConnectedPortfolio = {
  id: string;
  name: string;
  assets: string[];
  value: CurrencyAmount;
  connection: {
    name: string;
    logo?: string;
  };
  order: number;
  type: `portfolio`;
  status: PortfolioStatus;
  color?: string | null;
  parentId?: string | null;
  disabled?: boolean;
};

export type ConnectedGroupPortfolio = Omit<ConnectedPortfolio, `parentId`> & {
  items: ConnectedPortfolio[];
};

export type Timeframe = `daily` | `weekly` | `monthly` | `yearly`;

export type PayloadWithChart<T = object> = {
  timeframe: Timeframe;
} & T;

export type Transaction = {
  id: string;
  portfolio: TransactionPortfolio;
  type: TransactionType;
  createdAt: string;
  price: number;
  amount: number;
  asset: Pick<Asset, `name` | `shortName` | `logo`>;
};

export type TransactionType = `buy` | `sell` | `withdrawal` | `deposit`;

export type TransactionPortfolio = {
  logo: string | null;
  name: string;
  balance: number;
  connection: string;
};

export type ChartData = {
  time: number;
  value: number;
};

export type PayloadWithPortfolio<T = object> = {
  id: string;
  type: `group` | `portfolio`;
} & T;

export type PayloadWithQuote<T = object> = {
  quote?: string;
} & T;

export type PayloadWithPagination<T = object> = {
  limit: number;
  page: number;
} & T;

export type ResponseWithPagination<T = object> = {
  data: T[];
  pagination: {
    limit: number;
    total: number;
    currentPage: number;
  };
};

export type StatChartData = {
  id: string;
  label: string;
  value: number;
};

// Get Assets
export type Asset = {
  name: string;
  shortName: string;
  amount: number;
  change: PriceChange;
  value: number;
  logo: string;
};

export type GetAssets = {
  payload: GetAssetsPayload;
};

export type GetAssetsPayload = PayloadWithPortfolio<PayloadWithQuote>;

export type GetAssetsResponse = Asset[];

type PriceChange = { amount: number; percentage: number };

// Get Statistics
export type GetStatistics = {
  payload: GetStatisticsPayload;
};

export type GetStatisticsPayload = PayloadWithPortfolio<PayloadWithQuote>;

export type GetStatisticsResponse = {
  pnl: PriceChange;
  totalValue: number;
};

export type Group = {
  id: string;
  name: string;
  uniqueAssets: string[];
  value: CurrencyAmount;
  order: number;
  type: `group`;
  color?: string | null;
  children?: (ConnectedPortfolio | Group)[];
};

// Get Portfolios
export type GetPortfoliosResponse = {
  portfolios: (ConnectedPortfolio | Group)[];
  stats: {
    totalValue: number;
    assets: ConnectedPortfolio["assets"];
  };
};

// Refresh Portfolio
export type RefreshPortfolio = {
  payload: RefreshPortfolioPayload;
};

export type RefreshPortfolioPayload = {
  integration_id: string;
};

export type RefreshPortfolioResponse = unknown;

// Get Portfolio By Id
export type GetPortfolioById = {
  payload: GetPortfolioByIdPayload;
};

export type GetPortfolioByIdPayload = {
  id: string;
};

export type GetPortfolioByIdResponse = ConnectedPortfolio;

// Get Profit Over Time
export type GetPortfolioValueOverTime = {
  payload: GetPortfolioValueOverTimePayload;
};

export type GetPortfolioValueOverTimePayload = PayloadWithPortfolio<
  PayloadWithChart<PayloadWithQuote>
>;

export type GetPortfolioValueOverTimeResponse = ChartData[];

// Create Portfolio
export type CreatePortfolio = {
  payload: CreatePortfolioPayload;
};

export type CreatePortfolioPayload = Pick<
  ConnectedPortfolio,
  `name` | `color`
> & { connectionId: string; meta: Record<string, unknown> };

export type CreatePortfolioResponse = ConnectedPortfolio;

// Get Asset Allocations
export type GetAssetAllocation = {
  payload: GetAssetAllocationPayload;
};

export type GetAssetAllocationPayload = PayloadWithPortfolio<PayloadWithQuote>;

export type GetAssetAllocationResponse = StatChartData[];

// Get Portfolio Allocation
export type GetPortfolioAllocation = {
  payload: GetPortfolioAllocationPayload;
};

export type GetPortfolioAllocationPayload =
  PayloadWithPortfolio<PayloadWithQuote>;

export type GetPortfolioAllocationResponse = StatChartData[];

// Get Asset Performance
export type GetAssetPerformance = {
  payload: GetAssetPerformancePayload;
};

export type GetAssetPerformancePayload = PayloadWithPortfolio<
  PayloadWithQuote<{
    timeframe: Timeframe;
  }>
>;

export type GetAssetPerformanceResponse = {
  shortName: string;
  name: string;
  change: PriceChange;
  logo: string;
};

// Get Asset Performance Over Time
export type GetAssetPerformanceOverTime = {
  payload: GetAssetPerformanceOverTimePayload;
};

export type GetAssetPerformanceOverTimePayload = PayloadWithChart<
  PayloadWithQuote<{
    assetName: string;
  }>
>;

export type GetAssetPerformanceOverTimeResponse = ChartData[];

// Remove Portfolio
export type RemovePortfolio = {
  payload: RemovePortfolioPayload;
};
export type RemovePortfolioPayload = {
  id: string;
};
export type RemovePortfolioResponse = undefined;

// Update Portfolio
export type UpdatePortfolio = {
  payload: UpdatePortfolioPayload;
};

export type UpdatePortfolioPayload = Pick<
  CreatePortfolioPayload,
  `color` | `name`
> &
  Pick<ConnectedPortfolio, `id`>;

export type UpdatePortfolioResponse = ConnectedPortfolio;

// Update Portfolio List Order
export type UpdatePortfolioListOrder = {
  payload: UpdatePortfolioListOrderPayload;
};

export type UpdatePortfolioListOrderPayload = {
  items: { id: string; type: "portfolio" | "group"; order: number }[];
};

export type UpdatePortfolioListOrderResponse = void;

// Get Transactions
export type GetTransactions = {
  payload: GetTransactionsPayload;
};

export type GetTransactionsPayload = PayloadWithPortfolio<
  PayloadWithPagination<PayloadWithQuote>
>;

export type GetTransactionsResponse = ResponseWithPagination<Transaction>;

// Get Portfolio Status
export type GetPortfolioStatus = {
  payload: GetPortfolioStatusPayload;
};

export type GetPortfolioStatusPayload = { id: string };

export type GetPortfolioStatusResponse = PortfolioStatus;

// Get Portfolios
export type GetPortfolios = {
  payload: GetPortfoliosPayload;
};

export type GetPortfoliosPayload = PayloadWithQuote;

// Generate Advice
export type GenerateAdvice = {
  payload: GenerateAdvicePayload;
};

export type GenerateAdvicePayload = PayloadWithPortfolio<
  PayloadWithQuote<{
    messages: {
      role: "user" | "assistant";
      content: string;
    }[];
    userLocation?: string;
  }>
>;

export type GenerateAdviceResponse = {
  content: string;
  id: string;
};
