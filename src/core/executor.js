export async function executeArbitrage(
  buyExchange,
  sellExchange,
  symbol,
  amount
) {
  console.log("Executing arbitrage...");

  await buyExchange.createMarketBuyOrder(symbol, amount);
  await sellExchange.createMarketSellOrder(symbol, amount);

  console.log("Arbitrage completed.");
}
