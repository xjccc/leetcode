function addBinary(a: string, b: string): string {
  let al = a.length - 1
  let bl = b.length - 1
  let s = ''
  let carry = 0
  while (al > -1 || bl > -1) {
      let num1 = +(a[al] || '')
      let num2 = +(b[bl] || '')
      let val = num1 + num2 + carry
      carry = ~~(val / 2)
      val = val % 2
      s = val + s
      al--
      bl--
  }
  return carry ? '1' + s : s
}
