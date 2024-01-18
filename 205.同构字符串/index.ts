function isIsomorphic(s: string, t: string): boolean {
  let i = s.length,
    S = Array(i)
  while (i--) S[i] = s[i] + ',' + t[i]
  const l = new Set(S).size
  return l === new Set(s).size && l === new Set(t).size
}
