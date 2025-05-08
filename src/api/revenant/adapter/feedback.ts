import { AsyncCatchError } from "@/api/core/error/decorator";
import { Feedback } from "@/api/core/interface";
import type * as Types from "@/api/core/interface";

import * as service from "@/api/revenant";

export default class FeedbackService extends Feedback {
  @AsyncCatchError()
  async createFeedback(
    params: Types.CreateFeedback
  ): Promise<Types.CreateFeedbackResponse> {
    await service.createFeedback({
      payload: {
        content: params.payload.content,
        title: params.payload.title,
      },
    });

    return;
  }
}
