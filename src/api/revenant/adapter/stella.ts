import { AsyncCatchError } from "@/api/core/error/decorator";
import * as Types from "@/api/core/interface/stella";
import { Stella } from "@/api/core/interface/stella";
import * as service from "@/api/revenant";

export default class StellaService extends Stella {
  @AsyncCatchError()
  async sendMessage({
    payload,
  }: Types.SendMessage): Promise<Types.SendMessageResponse> {
    const response = await service.sendMessage({
      payload: {
        question: payload.question,
        token: payload.token,
        portfolio_id: payload.portfolio_id,
      },
    });
    return response.data;
  }
}
