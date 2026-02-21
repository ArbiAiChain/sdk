export async function getPrices(exchange, symbol) {
  const ticker = await exchange.fetchTicker(symbol);
  return {
    bid: ticker.bid,
    ask: ticker.ask
  };
}

export function calculateSpread(priceA, priceB) {
  return ((priceB - priceA) / priceA) * 100;
}
