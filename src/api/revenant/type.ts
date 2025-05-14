type Ok<T> = {
  status: "success";
  message: string;
  code: number;
  data: T;
};

type AggregationQuery<T = object> = {
  type?: "portfolio" | "group";
} & T;

type PaginationQuery<T = object> = {
  page?: number;
  limit?: number;
  order?: string;
} & T;

type QuoteQuery<T = object> = {
  quote?: string;
} & T;

type PaginatedResponse<T> = Ok<{
  list: T[];
  meta: PaginationMeta;
}>;

export type Timeframe = "daily" | "weekly" | "monthly" | "yearly";

export type User = {
  user: {
    id: string;
    aud: string;
    role: string;
    email: string;
    email_confirmed_at: string;
    phone: string;
    confirmed_at: string;
    recovery_sent_at: string;
    last_sign_in_at: string;
    app_metadata: {
      provider: string;
      providers: string[];
    };
    user_metadata: Record<string, unknown>;
    identities: {
      identity_id: string;
      id: string;
      user_id: string;
      identity_data: {
        email: string;
        sub: string;
      };
      provider: string;
      last_sign_in_at: string;
      created_at: string;
      updated_at: string;
      email: string;
    }[];
    created_at: string;
    updated_at: string;
    is_anonymous: boolean;
  };
  session: {
    access_token: string;
    token_type: string;
    expires_in: number;
    expires_at: number;
    refresh_token: string;
    user: {
      id: string;
      aud: string;
      role: string;
      email: string;
      email_confirmed_at: string;
      phone: string;
      confirmed_at: string;
      recovery_sent_at: string;
      last_sign_in_at: string;
      app_metadata: {
        provider: string;
        providers: string[];
      };
      user_metadata: Record<string, unknown>;
      identities: {
        identity_id: string;
        id: string;
        user_id: string;
        identity_data: {
          email: string;
          sub: string;
        };
        provider: string;
        last_sign_in_at: string;
        created_at: string;
        updated_at: string;
        email: string;
      }[];
      created_at: string;
      updated_at: string;
      is_anonymous: boolean;
    };
  };
};

export type SignIn = {
  payload: SignInPayload;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignInResponse = Ok<User>;

export type GetProfileResponse = Ok<User>;

export type RenewToken = {
  payload: RenewTokenPayload;
};

export type RenewTokenPayload = {
  refreshToken: string;
};

export type RenewTokenResponse = Ok<User>;

export type GetConnectionsResponse = Ok<Connection[]>;

export type GetConnectionByName = {
  param: GetConnectionByNameParam;
};

export type GetConnectionByNameParam = {
  name: string;
};

export type GetConnectionByNameResponse = Ok<Connection>;

export type Connection = {
  name: string;
  title: string;
  type: string;
  logo: string;
  description: string;
  enabled: boolean;
  created_at: string;
  schema: object;
};

export type CreateFeedback = {
  payload: CreateFeedbackPayload;
};

export type CreateFeedbackPayload = {
  title: string;
  content: string;
};

export type CreateFeedbackResponse = Ok<Feedback>;

export type Feedback = {
  content: string;
  created_at: string;
  id: string;
  title: string;
  user_id: string;
};

export type GetPortfolios = {
  query: GetPortfoliosQuery;
};

export type GetPortfoliosQuery = QuoteQuery;

type Stats = {
  total_value: number;
  unique_assets: string[];
  total_portfolios: number;
};

export type GetPortfoliosResponse = Ok<{
  groups: (PortfolioGroup | PopulatedPortfolio)[];
  stats: Stats;
}>;

export type GetPortfolioById = {
  param: GetPortfolioByIdParam;
};

export type GetPortfolioByIdParam = {
  id: string;
};

export type GetPortfolioByIdResponse = Ok<PopulatedPortfolio>;

export type GetPortfolioStatus = {
  param: GetPortfolioStatusParam;
};

export type GetPortfolioStatusParam = {
  id: string;
};

export type GetPortfolioStatusResponse = Ok<{ status: PortfolioStatus }>;

export type DeletePortfolio = {
  param: DeletePortfolioParam;
};

export type DeletePortfolioParam = {
  id: string;
};

export type DeletePortfolioResponse = Ok<boolean>;

export type CreatePortfolio = {
  payload: CreatePortfolioPayload;
};

export type CreatePortfolioPayload = Pick<
  Portfolio,
  `title` | `meta` | `color`
> & { connection: string };

export type CreatePortfolioResponse = Ok<PopulatedPortfolio>;

export type UpdatePortfolio = {
  param: UpdatePortfolioParam;
  payload: UpdatePortfolioPayload;
};

export type UpdatePortfolioParam = {
  id: string;
};

export type UpdatePortfolioPayload = Partial<CreatePortfolioPayload>;

export type UpdatePortfolioResponse = Ok<PopulatedPortfolio>;

export type SyncPortfolio = {
  param: SyncPortfolioParam;
};

export type SyncPortfolioParam = {
  id: string;
};

export type SyncPortfolioResponse = Ok<void>;

type PortfolioStatus = "active" | "inactive" | "syncing" | "unknown";

// Common types
export type Portfolio = {
  id: number;
  connection_name: string;
  user_id: string;
  title: string;
  meta?: Record<string, unknown>;
  color: string;
  created_at: string;
  last_sync_at: string | null;
  status: PortfolioStatus;
  group_id: string | null;
  type: "portfolio";
};

export type PopulatedPortfolio = Omit<Portfolio, "connection_name" | "meta"> & {
  connection: Pick<Connection, `name` | `logo` | `title` | `type`>;
  value: number;
  assets: string[];
  asset_count: number;
};

export type GetPortfolioGroupsResponse = Ok<
  (PortfolioGroup | PopulatedPortfolio)[]
>;

export type GetPortfolioGroupById = {
  param: GetPortfolioGroupByIdParam;
};

export type GetPortfolioGroupByIdParam = {
  id: string;
};

export type GetPortfolioGroupByIdResponse = Ok<
  PortfolioGroup | PopulatedPortfolio
>;

export type PortfolioGroup = {
  id: string;
  user_id: string;
  title: string;
  color: string;
  created_at: string;
  total_value: number;
  unique_assets: string[];
  total_portfolios: number;
  parent_id: string | null;
  children: (PortfolioGroup & PopulatedPortfolio)[];
  type: "group";
};

export type GetAssetPriceHistory = {
  param: GetAssetPriceHistoryParam;
  query: GetAssetPriceHistoryQuery;
};

export type GetAssetPriceHistoryParam = {
  symbol: string;
};

export type GetAssetPriceHistoryQuery = {
  startDate: string;
  endDate: string;
  resolution: string;
};

export type GetAssetPriceHistoryResponse = Ok<AssetPriceHistoryPoint[]>;

export type AssetPriceHistoryPoint = {
  time: string;
  balances: AssetBalance[];
  total_value: string;
};

export type AssetBalance = {
  asset: string;
  value: string;
  amount: string;
  pricePerUnit: string;
};

export type GetAssetPerformance = {
  param: GetAssetPerformanceParam;
  query: GetAssetPerformanceQuery;
};

export type GetAssetPerformanceParam = {
  id: string;
};

export type GetAssetPerformanceQuery = AggregationQuery<
  QuoteQuery<{
    timeframe: Timeframe;
    performanceType: "best" | "worst";
  }>
>;

export type GetAssetPerformanceResponse = Ok<AssetPerformance>;

export type GetAssetAllocation = {
  param: GetAssetAllocationParam;
  query: GetAssetAllocationQuery;
};

export type GetAssetAllocationParam = {
  id: string;
};

export type GetAssetAllocationQuery = AggregationQuery<QuoteQuery>;

export type GetAssetAllocationResponse = Ok<AssetAllocation[]>;

export type GetPortfolioAllocation = {
  param: GetPortfolioAllocationParam;
  query: GetPortfolioAllocationQuery;
};

export type GetPortfolioAllocationParam = {
  id: string;
};

export type GetPortfolioAllocationQuery = AggregationQuery<QuoteQuery>;

export type GetPortfolioAllocationResponse = Ok<PortfolioAllocation[]>;

export type GetBalance = {
  param: GetBalanceParam;
  query: GetBalanceQuery;
};

export type GetBalanceParam = {
  id: string;
};

export type GetBalanceQuery = AggregationQuery<QuoteQuery>;
export type GetBalanceResponse = Ok<{ balance: number }>;

export type GetAssets = {
  param: GetAssetsParam;
  query: GetAssetsQuery;
};

export type GetAssetsParam = {
  id: string;
};

export type GetAssetsQuery = AggregationQuery<PaginationQuery<QuoteQuery>>;
export type GetAssetsResponse = PaginatedResponse<Asset>;

export type GetTransactions = {
  param: GetTransactionsParam;
  query: GetTransactionsQuery;
};

export type GetTransactionsParam = {
  id: string;
};

export type GetTransactionsQuery = AggregationQuery<
  PaginationQuery<QuoteQuery>
>;

export type GetTransactionsResponse = PaginatedResponse<Transaction>;

export type GetHistoryChart = {
  param: GetHistoryChartParam;
  query: GetHistoryChartQuery;
};

export type GetHistoryChartParam = {
  id: string;
};

export type GetHistoryChartQuery = AggregationQuery<
  QuoteQuery<{
    timeframe: Timeframe;
  }>
>;

export type GetHistoryChartResponse = Ok<HistoryDataPoint[]>;

type AssetMini = {
  symbol: string;
  logo: string;
  name: string;
};

export type Asset = {
  amount: string;
  asset: AssetMini;
  value: number;
  price_per_unit: number;
  change: number;
  change_percentage: number;
};

export type AssetAllocation = {
  asset: AssetMini;
  percentage: number;
  amount: number;
  value: number;
};

export type PortfolioAllocation = {
  portfolio: Pick<Portfolio, `id` | `title`>;
  balance: number;
  percentage: number;
};

export type PerformanceDataPoint = {
  time: string;
  price: string;
};

export type AssetPerformance = {
  asset: AssetMini;
  start_price: number;
  current_price: number;
  price_change: number;
  percentage_change: number;
  total_value: number;
  pnl: number;
  amount: number;
};

export type HistoryDataPoint = {
  time: string;
  balances: {
    asset: string;
    value: string;
    amount: string;
    price_per_unit: string;
  }[];
  total_value: string;
};

type TransactionType = "buy" | "sell" | "deposit" | "withdrawal";
type ConnectionType = "CEX";

export type Transaction = {
  id: string;
  hash: string;
  portfolio: {
    id: string;
    title: string;
    connection: {
      name: string;
      logo: string;
      title: string;
      type: ConnectionType;
    };
  };
  asset: AssetMini;
  amount: number;
  time: string;
  type: TransactionType;
  value: number;
  portfolio_total_value: number;
  balances: {
    asset: string;
    value: string;
    amount: string;
    price_per_unit: string;
  }[];
};

export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type GetAssetPerformanceOverTime = {
  param: GetAssetPerformanceOverTimeParam;
  query: GetAssetPerformanceOverTimeQuery;
};

export type GetAssetPerformanceOverTimeParam = {
  symbol: string;
};

export type GetAssetPerformanceOverTimeQuery = QuoteQuery<{
  timeframe: Timeframe;
}>;

export type GetAssetPerformanceOverTimeResponse = Ok<PerformanceDataPoint[]>;

export type ReorderPortfolioGroups = {
  payload: ReorderPortfolioGroupsPayload;
};

export type ReorderPortfolioGroupsPayload = {
  items: Array<{
    id: string;
    type: "portfolio" | "group";
  }>;
};

export type ReorderPortfolioGroupsResponse = Ok<boolean>;

export type AdvisorMessage = {
  role: "user" | "assistant" | "system";
  content: string;
  id?: string;
};

export type GenerateAdvice = {
  param: GenerateAdviceParam;
  payload: GenerateAdvicePayload;
  query?: GenerateAdviceQuery;
};

export type GenerateAdviceParam = {
  id: string;
};

export type GenerateAdvicePayload = {
  messages: AdvisorMessage[];
  userLocation?: string;
};

export type GenerateAdviceQuery = QuoteQuery<AggregationQuery>;

export type GenerateAdviceResponse = Ok<{
  content: string;
  id: string;
}>;
