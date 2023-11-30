function lengthOfLastWord(s: string): number {
  let a = s.trim().split(' ')
  return a.pop().length
}

function lengthOfLastWord1(s: string): number {
  let l = 0
  let ns = s.trim()
  let i = ns.length - 1
  while (i >= 0) {
      if (ns[i] === ' ') {
          return l
      } else {
          l++
      }
      i--
  }
  return l
}