function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}

function strStr1(haystack: string, needle: string): number {
  let m = haystack.length
  let n = needle.length
  let i = 0
  while (i <= (m - n)) {
    if (haystack.slice(i, n + i) === needle) {
      return i
    }
    i++
  }
  return -1
}

function strStr2(haystack: string, needle: string): number {
  const n = haystack.length, m = needle.length;
  for (let i = 0; i + m <= n; i++) {
    let flag = true;
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] != needle[j]) {
        flag = false
        break;
      }
    }
    if (flag) {
      return i
    }
  }
  return -1
}