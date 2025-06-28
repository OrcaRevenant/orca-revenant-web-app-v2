export abstract class Stella {
  abstract sendMessage(params: SendMessage): Promise<SendMessageResponse>;
}

export type SendMessage = {
  payload: SendMessagePayload;
};

export type SendMessagePayload = {
  question: string;
  token: string;
  portfolio_id: string;
};

export type SendMessageResponse = {
  question: string;
  answer: string;
};
