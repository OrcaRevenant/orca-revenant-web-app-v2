import type { Api } from "@/api/core/interface";
import AuthService from "./auth";
import ConnectionService from "./connection";
import FeedbackService from "./feedback";
import PortfolioService from "./portfolio";
import StellaService from "./stella";

export default class SupabaseService implements Api {
  auth = new AuthService();
  portfolio = new PortfolioService();
  connection = new ConnectionService();
  feedback = new FeedbackService();
  stella = new StellaService();
}
