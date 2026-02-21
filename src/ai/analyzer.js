export function analyzeOpportunity(spread, minSpread) {
  if (spread >= minSpread) {
    return {
      decision: "EXECUTE",
      confidence: Math.min(100, spread * 10)
    };
  }

  return {
    decision: "HOLD",
    confidence: 0
  };
}
