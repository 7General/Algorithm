window.onload = function(){
    console.log('数组')
    /****
     * 操作数组
     * 1：push：在尾部插入元素
     * 2：pop:取出最后一个元素并返回
     * 3：shift 取出第一个元素返回
     * 4：unshift 在头部添加元素
     * 通过对比 push、pop 和 shift、unshift 我们发现，
     * push 和 pop 是作用于数组尾部的方法，
     * 而 shift 和 unshift 是作用于数组头部的方法
     */
    var nums = [1,2,3,4,5,6]
    roate(nums,2)
    console.log(nums)
    
}

/*************************1.旋转数组*********************************************/
/****
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 思路
 * 数据元素向右移动 1 个位置，相当于将数组元素的最后一项截取，然后放到第一项的位置，因此向 
 * 右移动 k 个位置，就是循环执行上述操作 k 次。而当 k 为数组长度的倍数时，实际相当于没有移 
 * 动，所以实际需要循环操作的次数为 k % l。
 * 详解
 * 1. 首先计算出需要循环移动的次数;
 * 2. 通过数组的 和 方法实现旋转，循环执行 k 次。
 */

const roate = function (nums,k){
    const l = nums.length;
    k = k % l;
    for (let index = 0; index < k; index++) {
        nums.unshift(nums.pop());
    }
}