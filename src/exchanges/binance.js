import ccxt from "ccxt";
import { config } from "../config/config.js";

export const binance = new ccxt.binance({
  apiKey: config.binance.apiKey,
  secret: config.binance.secret,
});
