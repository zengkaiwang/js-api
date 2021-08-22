/**
 * 1.合并两个有序数组
 */
var nums1 = [1, 2, 3, 0, 0, 0],
  m = 3
var nums2 = [5, 6],
  n = 2
// 预期结果: [1, 2, 3, 5, 6]

/**
 * 方法一: 直接合并后排序
 * 解题思路: 直接把nums2 合并到nums2 尾部, 然后直接对整个数组进行排序
 */
var merge1 = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
}
merge1(nums1, 3, nums2, 2)
console.log('wzk====', nums1) // [ 1, 2, 3, 5, 6 ]

/**
 * 方法二: 双指针
 * 解题思路: 方法一没有利用数组已经被排序的性质. 为了利用这一性质,我们可以使用双指针方法.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = 0,
    p2 = 0
  const sorted = new Array(m + n).fill(0)
  var cur
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++]
    } else if (p2 === n) {
      cur = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++]
    } else {
      cur = nums2[p2++]
    }
    console.log('cur', cur)
    sorted[p1 + p2 - 1] = cur
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = sorted[i]
  }
}

merge(nums1, 3, nums2, 2)
console.log(nums1)

/**
 * 方法3: 逆向双指针
 */
var merge3 = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1
  var tail = m + n - 1
  var cur
  while (p1 >= 0 || p2 >= 0) {
    // 边界情况
    if (p1 === -1) {
      cur = nums2[p2--]
    } else if (p2 === -1) {
      cur = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      // 常规情况
      cur = nums1[p1--]
    } else {
      cur = nums2[p2--]
    }
    nums1[tail--] = cur
  }
}
var arr3 = [1, 2, 3, 0, 0]
merge3(arr3, 3, [4, 5], 2)
console.log('arr3', arr3) // [ 1, 2, 3, 0, 1 ]
