function isPalindrome(x: number): boolean {
  if (x < 0) return false
  let y = x + ''
  return y === y.split('').reverse().join('')
}

function isPalindrome1(x: number): boolean {
  if (x < 0) return false
  let y = x + ''
  for (let i = 0; i < y.length -1; i ++) {
      if (y[i] !== y[y.length - 1 - i]) {
          return false
      }
  }
  return true
}
// 阿福的解法 - https://leetcode.cn/problems/palindrome-number/solutions/1759268/9hui-wen-shu-by-wo-ke-mei-you-kong-ogws/
function isPalindrome2(x: number): boolean {
  if ( x< 0) return false
  let cur = 0
  let num = x
  while (num !== 0) {
    cur = cur * 10 + num % 10
    num = Math.floor(num/10)
  }
  return cur === x
}