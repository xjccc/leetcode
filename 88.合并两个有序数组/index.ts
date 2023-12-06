function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (!n) return
  let i = n - 1
  let l = m + n - 1
  while (i >= 0) {
    nums1[l] = nums2[i]
    i--
    l--
  }
  nums1.sort((a, b) => a - b)
}

function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  if (!n) return
  let i = n - 1
  let l = m + n - 1
  while (i >= 0) {
    nums1[l] = nums2[i]
    i--
    l--
  }
  for (let i = 0; i < nums1.length; i++) {
    for (let j = nums1.length - 1; j >= i; j--) {
      if (nums1[i] > nums1[j]) {
        [nums1[i], nums1[j]] = [nums1[j], nums1[i]]
      }
    }
  }
}

function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, n, ...nums2)
  nums1.sort((a, b) => a - b)
}

function merge3(nums1: number[], m: number, nums2: number[], n: number): void {
  // 双指针
  let p1 = 0, p2 = 0
  const sorted = new Array(m + n).fill(0)
  let cur;
  while (p1 < m || p2 < n) {
    // 边界情况
    if (p1 === m) {
      cur = nums2[p2++]
    } else if (p2 === n) {
      cur = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++]
    } else {
      cur = nums2[p2++]
    }

    sorted[p1 + p2 - 1] = cur
  }
  for (let i = 0; i != m + n; i++) {
    nums1[i] = sorted[i];
  }
}