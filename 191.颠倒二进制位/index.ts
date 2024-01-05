function reverseBits(n: number): number {
  // 十进制数字转换为二进制字符串
  let bitNumber = n.toString(2)
  // 初始化一个32长度的数组填充0
  let reverseArray = new Array(32).fill(0)
  // 颠倒顺序，从尾部开始填充数组
  bitNumber
    .split('')
    .reverse()
    .forEach((x, index) => {
      reverseArray[31 - index] = x
    })
  // 颠倒顺序，并从二进制数字转换未十进制数字
  return parseInt(reverseArray.reverse().join(''), 2)
}
