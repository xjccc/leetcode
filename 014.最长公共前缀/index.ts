function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]
  let len = strs[0].length
  for (let i = 1; i < strs.length; i++) {
    len = Math.min(len, strs[i].length)
  }

  let i = 0
  let char
  let r = []
  while (i < len) {
    char = strs[0].slice(i, 1 + i)
    for (let j = 0; j < strs.length; j++) {
      if (char !== strs[j].slice(i, 1 + i)) {
        return r.join('')
      }
    }
    i++
    r.push(char)
  }
  return r.join('')
}

function longestCommonPrefix1(strs: string[]): string {
  let firstWord = strs[0];
  for (const word of strs) {
    while (word.indexOf(firstWord) != 0) {
      firstWord = firstWord.substring(0, firstWord.length - 1);
      console.log(word, firstWord)
    }
  }
  return firstWord
}