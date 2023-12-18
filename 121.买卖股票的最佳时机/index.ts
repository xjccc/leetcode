function maxProfit (prices: number[]): number {
  let r = 0
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = Math.min(prices[i], min)
    }
    r = Math.max(prices[i] - min, r)
  }
  return r
}
