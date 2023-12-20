function isPalindrome (s: string): boolean {
  if (!s.trim()) return true
  let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let reverseStr = str.split('').reverse().join('')
  return str === reverseStr
}

function isPalindrome1 (s: string): boolean {
  const fs = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase()

  let left = 0
  let right = fs.length - 1

  while (left < right) {
    if (fs.charAt(left) !== fs.charAt(right)) return false

    left++
    right--
  }

  return true
}
