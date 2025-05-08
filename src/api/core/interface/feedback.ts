export abstract class Feedback {
  abstract createFeedback(
    params: CreateFeedback
  ): Promise<CreateFeedbackResponse>;
}

// Login
export type CreateFeedback = {
  payload: CreateFeedbackPayload;
};

export type CreateFeedbackPayload = {
  title: string;
  content: string;
};

export type CreateFeedbackResponse = undefined;
