/*
 * @Author: your name
 * @Date: 2020-06-29 10:37:40
 * @LastEditTime: 2020-07-01 10:26:37
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

    const character = ['w','a','n','g','h','u'];
    reverseString(character)
    console.log('反转字符串>'+character);

    var firtstC = firstUniqChar('leetCode');
    console.log('字符串中的第一个唯一字符'+firtstC);

    var paliStr = 'race a car';//'A man, a plan, a canal: Panama';
    var  ispaliStr = isPalindrome(paliStr);

    var ispali = isPalindromeArry(paliStr);
    console.log('是否是回文字符串>'+ispaliStr);


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
        s[s.length - i - 1] = a;
    }
}
/***
 * 复杂度分析
   时间复杂度: O(n)
   遍历次数:如果字符串长度为 n ， n 是偶数，遍历次数位 n/2 ，如果 n 是奇数，遍历次数 为 (n+1)/2
 * 空间复杂度: O(1) 
   1个临时变
 */

 /******************
  * 5.字符串中的第一个唯一字符
  * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
  ******************/
 
const firstUniqChar = function(s){
    const hash = {}
    for (let index = 0; index < s.length; index++) {
        if(!hash[s[index]]){
            hash[s[index]] = 1;
        } else {
            hash[s[index]] += 1;
        }
    }
    for (let index = 0; index < s.length; index++) {
        if (hash[s[index]] === 1) {
            return index;
        }
    }
    return -1;
}
/***
  复杂度分析
    空间复杂度: O(1)
        因为变量只有 hash 和 i ，开辟空间大小不随输入的变量变化
    时间复杂度: O(n) 
        因为有两次遍历，且每次遍历都只有一层没有嵌套，所以遍历的次数只和入参字符串 s 的长 度线性正相关
 */

/***
 * 6.验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 */
/*************************
 * 方法一
 * 思路
 * 首先，去除字符串中的非字母和数字，再将字符串转换为数组，再对数组首尾一一比较，即可得出 结果。
 * 详解
 * 1. 将传入的字符串，利用 toLowerCase() 方法统一转化为小写，再利用正则表达式 /[ ^ A-Za-z0- 9]/g 在字符串中去除非字母和数字，最后将字符串转换为数组。
 * 2. 转换数组后，利用循环一一比较元素，先比较第一个和最后一个，再比较第二个和倒数二个， 依次类推，若中间有不相等则不是回文串，反之，则是回文串。
 *************************/
/**
 * @description: 验证回文串:方法一
 * @param {type} 
 * @return: 
 */
const isPalindrome = (s) => {
    // 将传入的字符串,统一转化为小写,同时去除非字母和数字,在转换为数组
    const arr = s.toLowerCase().replace(/[^A-Za-z0-9]/g,'').split('');
    let i = 0;
    let j = arr.length - 1;
    // 循环比较开始
    while(i < j){
        if (arr[i] === arr[j]) {
            i += 1;
            j -= 1;
        } else {
            return false;
        }
    }
    return true;
}
/*****
 * 复杂度分析
 * 时间复杂度: O(n) 该解法中 while 循环最多执行 n/2 次，即回文时，因此，时间复杂度为 O(n)。
 * 空间复杂度: O(n) 该解法中，申请了 1 个大小为 n 的数组空间，因此，空间复杂度为 O(n)。
 */


/*************************
 * 方法二
 * 思路
 * 首先，去除字符串中的非字母和数字，然后，利用数组将字符串翻转，再和原字符串进行比较，即 可得到结果。
 * 详解
 * 1. 将传入的字符串，利用 toLowerCase() 方法统一转化为小写，再利用正则表达式 /[ ^ A-Za-z0- 9]/g 在字符串中去除非字母和数字，得到字符串 arr。
 * 2. 将字符串 arr 转换为数组，利用数组的方法反转数组，再将数组转为字符串 newArr。
 *************************/
const isPalindromeArry = (s)=> {
    // 方便比较,统一转化为小写,并去除非字母和数字
    const arr = s.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
    // 将新字符串转换为数组,利用数组的方法获得反转的字符串
    const newArr = arr.split('').reverse().join('');
    // 将2个字符进行比较得出结果
    return arr === newArr;
}
/***
 * 复杂度分析
 * 时间复杂度: O(n)
 * 该解法中， toLowerCase() , replace() , split() , reverse() , join() 的时间复杂度都为
   O(n)，且都在独立的循环中执行，因此，总的时间复杂度依然为 O(n)。
 * 空间复杂度: O(n)
 * 该解法中，申请了 1 个大小为 n 的字符串和 1 个大小为 n 的数组空间，因此，空间复杂度 为 O(n∗2) ，即 O(n)。
*/


