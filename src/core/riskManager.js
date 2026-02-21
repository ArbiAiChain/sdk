export function validateTrade(spread, confidence) {
  if (confidence > 60 && spread > 0.3) {
    return true;
  }
  return false;
}
