/**
 * 2. 两数之和
 * 题目描述: 给定一个整数数组 nums 和一个目标值 target ，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 */
var nums = [2, 7, 11, 15],
  target = 9
// 期望: 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

/**
 * 解法1: 暴力枚举
 * 思路及算法: 最容易想到的方法是枚举数组中的每一个数 x，寻找数组中是否存在 target - x。
 * 时间复杂度：O(N^2)
 * 空间复杂度：O(1)
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  return []
}

twoSum(nums, 9)

/**
 * 解法2: 哈希表
 * 思路及算法: 注意到方法一的时间复杂度较高的原因是寻找 target - x 的时间复杂度过高。使用哈希表，可以将寻找 target - x 的时间复杂度降低到从 O(N) 降低到 O(1)。
 */
const twoSum = function (nums, target) {
  let map = new Map()
  let k
  for (let i = 0; i < nums.length; i++) {
    k = target - nums[i]
    if (map.has(k)) {
      return [map.get(k), i]
    }
    map.set(nums[i], i)
  }
  return []
}

var nums = [2, 7, 11, 15]
console.log(twoSum(nums, 9))

// =========================================1.合并两个有序数组======================================

/**
 * 1. 合并两个有序数组
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
