function romanToInt(s: string): number {
  let result = 0
  const map = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000
  }
  let l = s.length
  let i = 0
  while (l > 0) {
      let t = s.slice(i, 2 + i)
      if (map[t]) {
          l -= 2
          i += 2
          result += map[t]
      } else {
          t = s.slice(i, 1 + i)
          result += map[t]
          i += 1
          l -= 1
      }
  }
  return result
}

const dict:Map<string, number> = new Map([["I", 1],["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);

function romanToInt1(s: string): number {
    let sum = 0;
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        const value = dict.get(char);
        if(i<s.length-1 && value < dict.get(s[i+1])){
            sum -= value
        }else{
            sum += value
        }
    }

    return sum;
}