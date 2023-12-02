function mySqrt(x: number): number {
    return Math.floor(Math.sqrt(x))
};

function mySqrt1(x: number): number {
    let pre = 0
    for (let i = 0; i <= x; i++) {
        if (i * i === x) {
            return i
        }
        if (i * i > x) {
            break
        } else {
            pre = i
        }
    }
    return pre
};

function mySqrt2(x: number): number {
  let l = 0
  let r = x
  while (l <= r) {
      const mid = Math.floor((l + r) / 2)
      const product = mid * mid
      if (product === x) {
          return mid
      }
      if (product < x) {
          l = mid + 1
      } else {
          r = mid - 1
      }
  }
  return r
};