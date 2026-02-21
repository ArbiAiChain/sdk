import dotenv from "dotenv";
dotenv.config();

export const config = {
  binance: {
    apiKey: process.env.BINANCE_API_KEY,
    secret: process.env.BINANCE_SECRET
  },
  bybit: {
    apiKey: process.env.BYBIT_API_KEY,
    secret: process.env.BYBIT_SECRET
  },
  tradingPair: "BTC/USDT",
  minSpreadPercent: 0.3
};
