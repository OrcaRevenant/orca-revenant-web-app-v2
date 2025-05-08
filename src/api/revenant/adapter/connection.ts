import { AsyncCatchError } from "@/api/core/error/decorator";
import { Connection } from "@/api/core/interface";
import type * as Types from "@/api/core/interface";
import * as service from "@/api/revenant";

export default class ConnectionService extends Connection {
  @AsyncCatchError()
  async getConnections(): Promise<Types.GetConnectionsResponse> {
    const response = await service.getConnections();
    return response.data.map((v) => ({
      id: v.name,
      name: v.title,
      key: v.name,
      enabled: !!v.enabled,
      logo: v.logo,
      schema: v.schema,
    }));
  }

  @AsyncCatchError()
  async getConnectionById(
    params: Types.GetConnectionById
  ): Promise<Types.GetConnectionByIdResponse> {
    const response = await service.getConnectionByName({
      param: { name: params.payload.id },
    });

    const connection = response.data;

    return {
      id: connection.name,
      name: connection.title,
      key: connection.name,
      enabled: !!connection.enabled,
      schema: connection.schema,
    };
  }
}
