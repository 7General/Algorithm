/*
 * @Author: your name
 * @Date: 2020-06-29 10:37:40
 * @LastEditTime: 2020-06-30 11:30:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /javaScript/javaScript.js
 */ 


window.onload = function(){
    console.log('sss')
    // var fib = fiboRecursion(3)
    // console.log(fib)
    // var fib2 = fiboIteration(3)
    // console.log(fib2)
    var reve = reverse(123);
    console.log("--"+reve)
}


/**
 * @description: 斐波那契数列-递归
 * @param {type} 
 * @return: 
 */
function fiboRecursion(n){
    if (n == 0 || n == 1) {
        return 1;
    }
    return fiboRecursion(n-1) + fiboRecursion(n-2)
}

/**
 * @description: 斐波那契数列-迭代
 * @param {type} 
 * @return: 
 */
function fiboIteration(n) {
    var first = 1,second = 1,sum = 0;
    for (let index = 0; index < n - 1; index++) {
        sum = first + second;
        first = second;
        second = sum;
    }
    return sum;
}


/**
 * @description: 翻转整数
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 输入: 123
 * 输出: 321
 * @param {type} 
 * @return: 
 */
function reverse(x){
    // 获取相应数的绝对值
    let rever = Math.abs(x);
    //极值
    const MAX = 2147483647;
    const MIN = -2147483648;

    let nums = 0;
    while(rever !== 0){
        // 借鉴欧几里得算法，从 nums 的最后一位开始取值拼成新的数
        mods = rever % 10;
        nums = mods + nums * 10; 
        // 剔除掉被消费的部分
        rever = Math.floor(rever / 10)
    }
    // 异常值
    if (nums >= MAX || nums <= MIN) {
        return 0;
    }
    if (x < 0) {
      return nums * -1;
    }
    return nums;
}
/**
 * 复杂度分析:
 * 时间复杂度: O(n)
   代码中使用for循环，次数为 n，即整数的长度，因此时间复杂度为 O(n)。 
 *  空间复杂度: O(1)
   算法中只用到常数个变量，因此空间复杂度为 O(1)。
 */




