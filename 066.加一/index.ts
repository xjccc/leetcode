function plusOne(digits: number[]): number[] {
  let index = digits.length - 1
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] > 8) {
      index--
    } else {
      digits[i] += 1
      break
    }
    if (index < 0) {
      digits.unshift(1)
      index = 0
    }
  }
  if (index < digits.length - 1) {
    for (let i = index + 1; i <= digits.length - 1; i++) {
      digits[i] = 0
    }
  }
  return digits
}

function plusOne1(digits: number[]): number[] {
  let i = digits.length - 1
  while (digits[i] === 9 && digits[i] !== undefined) {
    digits[i] = 0
    i--
  }
  if (i === -1) {
    digits.unshift(1)
  } else {
    digits[i]++
  }
  return digits
}