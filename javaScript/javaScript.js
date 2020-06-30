/*
 * @Author: your name
 * @Date: 2020-06-29 10:37:40
 * @LastEditTime: 2020-06-30 15:42:53
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
    console.log("整数翻转结果"+reve)

    var anagramsort = isAnagramSort('abc','bca');
    console.log('字母异位词'+anagramsort);

    console.log('字母异位词count>'+isAnagramCount('abc','cba'));
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


 
/*********************
 * 3.有效的字母异位词
 * 字母异位词指字母相同，但排列不同的字符串
 *********************/

/**
 * @description: 有效的字母异位词(sort)
 * @param {type} 
 * @return: 
 */
function isAnagramSort(s,t) {
    const sArr = s.split('');
    const tArr = t.split('');
    const sortFn = (a,b) => {
        return a.charCodeAt() - b.charCodeAt();
    }
    sArr.sort(sortFn);
    tArr.sort(sortFn);
    return sArr.join('') === tArr.join('');
}

/**
 * @description: 有效的字母异位词(迭代)
 * @param {type} 
 * @return: 
 */
const isAnagramCount = (s,t) => {
    if (s.length !== t.length) {
        return false;
    }
    const hash = {}
    for (const k of s) {
        hash[k] = hash[k] || 0;
        hash[k] += 1;
    }

    for (const k of t) {
        if(!hash[k]){
          return false;  
        }
        hash[k] -= 1;
    }
    return true;
}
/****
 * 
 * 时间复杂度: O(n)
 * 算法中使用了2个单层循环，因此，时间复杂度为 O(n)。
 * 空间复杂度: O(1)
 * 申请的变量 hash 最大长度为 256，因为 Ascii 字符最多 256 种可能，因此，考虑为常量空 间，即 O(1)。
 */



 /******************
  * 4.反转字符串
  * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一
问题。
  * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
  ******************/

  /*****
    思路 中间变量首尾替换法，逐位遍历，进行交换
    详解
        1.设置变量 i=0;
        2. 替换字符串的第i位和倒数第i位，替换方式:设置一个中间变量，替换两个字符串的值; 3. 变量 i + 1 ，继续替换替换字符串的第i位和倒数第i位;
        4. 直到i大于字符串s的长度的中位数，完成真个字符串的反转
   */
const reverseString = function(s) {
    for (let i = 0; i < s.length / 2; i++) {
        const a = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - i] = a;
    }
}
/***
 * 复杂度分析
   时间复杂度: O(n)
   遍历次数:如果字符串长度为 n ， n 是偶数，遍历次数位 n/2 ，如果 n 是奇数，遍历次数 为 (n+1)/2
 * 空间复杂度: O(1) 
   1个临时变量

 */






