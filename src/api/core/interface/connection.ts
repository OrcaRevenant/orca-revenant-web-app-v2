export abstract class Connection {
  abstract getConnections(): Promise<GetConnectionsResponse>;
  abstract getConnectionById(
    params: GetConnectionById
  ): Promise<GetConnectionByIdResponse>;
}

// Get Connections
export type SourceConnection = {
  id: string;
  name: string;
  key: string;
  enabled?: boolean;
  logo?: string;
  schema: object;
};

export type GetConnectionsResponse = SourceConnection[];

// Get Connection By Id
export type GetConnectionById = {
  payload: GetConnectionByIdPayload;
};

export type GetConnectionByIdPayload = {
  id: string;
};

export type GetConnectionByIdResponse = SourceConnection;
