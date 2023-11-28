function isValid(s: string): boolean {
  if (s.length < 2) return false
  let map = {
      '(': ')',
      '{': '}',
      '[': ']'
  }
  let stack = []
  let top
  for (let char of s) {
      let val
      if (val = map[char]) {
          stack.push(val)
      } else {
          top = stack.pop()
          if (top !== char) {
              return false
          }
      }
  }
  return !stack.length
}

function isValid1(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
    } else if (stack.pop() !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
}