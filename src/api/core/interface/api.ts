import type { Auth, Connection, Portfolio } from ".";
import type { Feedback } from "./feedback";

export type CurrencyAmount = number;

export abstract class Api {
  abstract readonly auth: Auth;
  abstract readonly portfolio: Portfolio;
  abstract readonly connection: Connection;
  abstract readonly feedback: Feedback;
}
