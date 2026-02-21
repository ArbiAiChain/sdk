import { binance } from "./exchanges/binance.js";
import { bybit } from "./exchanges/bybit.js";
import { config } from "./config/config.js";
import { getPrices, calculateSpread } from "./core/scanner.js";
import { analyzeOpportunity } from "./ai/analyzer.js";
import { validateTrade } from "./core/riskManager.js";
import { executeArbitrage } from "./core/executor.js";
import { log } from "./utils/logger.js";

async function startBot() {
  while (true) {
    try {
      const priceBinance = await getPrices(binance, config.tradingPair);
      const priceBybit = await getPrices(bybit, config.tradingPair);

      const spread = calculateSpread(
        priceBinance.ask,
        priceBybit.bid
      );

      log(`Spread: ${spread.toFixed(2)}%`);

      const aiDecision = analyzeOpportunity(
        spread,
        config.minSpreadPercent
      );

      if (validateTrade(spread, aiDecision.confidence)) {
        await executeArbitrage(
          binance,
          bybit,
          config.tradingPair,
          0.001
        );
      }

    } catch (error) {
      console.error("Error:", error.message);
    }

    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}

startBot();
