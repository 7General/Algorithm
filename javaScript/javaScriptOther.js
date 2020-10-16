/*************************1.最大子序和*********************************************/
/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组(子数组最少包含一个元素)，返回 
 * 其最大和。
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出:6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 方法一 暴力破解
 * 思路
 * 从数组最左边开始于数组右边数据依次相加，将相加之后数据进行比较，比较之后最大值为最终结果
 * 详解
 * 1. 创建临时变量 sum 和最大值 maxNumber
 * 2. 从数组子序列左端开始遍历依次取数据
 * 3. 从数组子序列右端开始遍历依次取数据和数组左边数据依次相加
 * 4. 将相加之后值与最大值 sum 进行比较，大的值赋值与 maxNumber 
 * 5. 最终获得最大值
 */
const maxSubArray = function(nums) {
    let sum = 0;
    let maxNumber = 0;
    for (let i = 0; i < nums.length; i++) {// 从数组子序列左端开始
        for (let j = i; j < nums.length; j++) { // 从数组子序列右端开始
            sum = 0;
            for (let k = i; k <= j; k++) { // 暴力计算
                sum += nums[k];
            }
            if(sum > maxNumber){
                maxNumber = sum;
            }         
        }
    }
    return maxNumber;
}
/**
 * 复杂度分析
 * 时间复杂度: O(n3) 对于每个元素，通过三次遍历数组的其余部分来寻找它所对应的目标元 素，这将耗费 O(n3) 的时间。
 * 空间复杂度: O(1)
 */
/***
 * 方法二 动态规划法
 * 思路
 * 数组从左端开始依次和右端数据相加，两数之和为最大数 sum 。下一次相加之后和最大数进行比 较，较大数赋值与 sum 由于有负数存在，如果两数相加之后为负数，则两数之和后的最大数为上 一个数。
 * 详解
 * 1. 从数组获取第一个值为最大值 sum 和中间值 n
 * 2. 遍历数组，如果中间值n大于0,则和中间值相加，相加结果和最大值比较，较大值赋值与sum 
 * 3. 如果中间值小于0，则将当前值作为中间值
 */
const maxSubArrayOther = function(nums){
    let sum = nums[0];
    let n = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if(n > 0){ // 判断中间值是否大于0
            n += nums[i];
        } else {
            n = nums[i];
        }
        // 相加后的值和最大值作比较
        if(sum < n){
            sum = n;
        }
    }
    return sum;
}
// 第一次提交

