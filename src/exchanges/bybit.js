import ccxt from "ccxt";
import { config } from "../config/config.js";

export const bybit = new ccxt.bybit({
  apiKey: config.bybit.apiKey,
  secret: config.bybit.secret,
});
