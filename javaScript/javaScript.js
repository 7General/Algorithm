/*
 * @Author: your name
 * @Date: 2020-06-29 10:37:40
 * @LastEditTime: 2020-07-15 15:26:28
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

    // 缺失【字符串转换整数】
    // 缺失【报数】
    const character = ['w','a','n','g','h','u'];
    reverseString(character)
    console.log('反转字符串>'+character);

    var firtstC = firstUniqChar('leetCode');
    console.log('字符串中的第一个唯一字符'+firtstC);

    var paliStr = 'race a car';//'A man, a plan, a canal: Panama';
    var  ispaliStr = isPalindrome(paliStr);

    var ispali = isPalindromeArry(paliStr);
    console.log('是否是回文字符串>'+ispaliStr);

    var hasIndex = strStr('wang','ng');
    console.log('strstr>'+hasIndex);
    var hasIndexOther = strStrOther('wang','ng');
    console.log('strstrother>'+hasIndexOther);


    var comArray = ['flower','flow','flight']
    var comRes = longestCommonPrefix(comArray);
    console.log('最长公共前缀>'+comRes);

    var longestStr = longestPalindrome('babad');
    console.log('最长回文子串'+longestStr);

    var rman = romanToIntTwo('VC');
    console.log('罗马数字转整数>'+rman);
    var romanOnew = romanToIntOne('LX');
    console.log('罗马数字转整数ONE>'+romanOnew);

    var fizzb = fizzBuzz(10);
    console.log('fizzBuzz>'+fizzb); 

    var countPrim = countPrimes(14);
    console.log('返回质数数量'+countPrim);

    var isPowerThree = isPowerOfThree(27);
    console.log('3的幂>'+isPowerThree);
    var isPowerThreeOther = isPowerOfThreeOther(27);
    console.log('3的幂other>'+isPowerThreeOther);

    var titleVar = titleToNumber('A');
    console.log('Excel表列序号>'+titleVar);

    var isHap = isHappy(1);
    console.log('快乐数>'+isHap);

    var isHapOther = isHappyOther(1);
    console.log('快乐数other>'+isHapOther);
}
/***
 * 1. 斐波那契数列
 * 2. 整数翻转
 * 3. 字母异位词
 * 4. 反转字符串
 * 5. 字符串中的第一个唯一字符
 * 6. 验证回文串
 * 7. strStr
 * 8. 最长公共前缀
 * 9. 最长回文子串
 * 10. 罗马数字转整数
 * 11. fizzBuzz
 * 12. 返回质数数量
 * 13. 3的幂
 * 14. [Excel表列序号]
 * 15. [快乐数]
 */


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

////////////////////////////////////////////////////////
/*************************7.实现strStr()*********************************************/
 /******************
  * 7.实现strStr()
  * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的
  * 第一个位置 (从0开始)。如果不存在，则返回 -1。
  * 以下称 haystack 字符串为匹配字符串，needle 字符串为查找字符串
  * ***********************************
  * 
  * 说明:
  * 当 needle 是空字符串时，我们应当返回什么值呢?这是一个在面试中很好的问题。
  * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
  * 
  * **********************************
  ******************/

 /************************
  * 方法一 遍历截取字符串对比 
  * 思路
  * 截取字符串对比的思路很简单，从匹配字符串 haystack 中截取出与需查找字符串 needle 长度相等 的内容后，对比截取的内容与匹配字符串是否相等，如果相等返回开始截取的下标。
  * 详解
  * 首先处理几个特殊场景
  *   1. needle 的长度为0，直接返回0
  *   2. needle 的字符串长度大于 haystack，肯定不匹配
  *   3. needle 的字符串长度等于 haystack，判断是否相等，相等则匹配否则不匹配
  * 剩下的就是 needle 字符串长度小于 haystack 的情况，遍历 haystack
  *   此处需要注意的是，当 haystack 剩余字符串长度小于 needle 长度时，肯定是不相等，无需再次比较。
  * 在遍历中判断 将要截取的字符串的首位与 needle 字符串的首位是否相同 ，如果不相同也就不需要 后续截取、比较，跳过该次循环
  */
 const strStr = function(haystack,needle) {
     const hayLen = haystack.length;
     const nedLen = needle.length;
     if (!needle) {
         return 0;
     }
     if (nedLen > hayLen) {
         return -1;
     } else if(nedLen === hayLen){
         return haystack === needle ? 0 : -1;
     } else {
         for (let index = 0; index <= hayLen - nedLen; index++) {
             if(haystack[index] !== needle[0]){
                 continue;
             }
             // 截取从首位匹配对的字母开始，截图长度为匹配开始的索引+nedLen
             if(haystack.substring(index,index+nedLen) === needle){
                 return index;
             }
         }
     }
     return -1;
 }
 /****
  * 复杂度分析:
  * 时间复杂度: O(n)
    遍历长度可能从1到 n−1，假设不同长度出现的概率均等，那么时间复杂度为
    (n − 1 + 1)/2 时间复杂度即为 O(n) 。 
  * 空间复杂度: O(1)
    使用 2 个额外存储空间。
  */



 /************************
  * 方法二 双层循环对比字符
  * 思路
  * 循环对比字符串思路也很简单，从匹配字符串 haystack 的不同位置开始遍历，判断其中是否含有 查找字符串 needle。
  *   如:haystack 为 hello， needle 为 ll，依次判断 he、el、ll、lo是否完全和 ll 相等，相等即返回对 应字符串在 haystack 中的下标。
  * 详解
  *   首先处理特殊边际情况，这块与第一种方法相同，就不再赘述。
  * 以下为算法步骤:
  *   1. 设置最外层循环，遍历次数为 0 - haystack长度减去 needle 的长度。剩余字符串长度小于 needle 长度时，肯定不匹配
  *   2. 判断匹配字符串 haystack 中该次循环使用到的字符串首尾字母是否与查找字符串 needle 首尾 字母相同。
  *      不相等，直接跳过继续遍历。 
  *      相等，执行第三步。
     
  *   3. 判断查找字符串 needle 的长度
  *      长度为 1，表明匹配成功，直接返回当前长字符串下标即可 
  *      长度大于 1，执行第四步
  *   4. 遍历对比字符串，循环判断匹配字符串 haystack 不同位置的字符是否与匹配字符串 needle 对 应位置的字符相等
  *      不相等时，跳出循环，进行下次循环。 
  *      到最后一位还未跳出循环表明完全匹配，返回当前遍历次数(即查找字符串在匹配字符串 中首次出现的位置)
  */
 const strStrOther = function(haystack,needle) {
    const hayLen = haystack.length;
    const nedLen = needle.length;
    if (!needle) {
        return 0;
    }
    if (nedLen > hayLen) {
        return -1;
    } else if(nedLen === hayLen){
        return haystack === needle ? 0 : -1;
    } else {
        for (let hasIndex = 0; hasIndex <= hayLen - nedLen; hasIndex++) {
            if(haystack[hasIndex] === needle[0] && 
               haystack[hasIndex + nedLen - 1] === needle[nedLen - 1]){
                if(nedLen === 1){
                    return hasIndex;
                }
                // 开始比较第一位相同后的每一位组合
                for (let nedIndex = 1; nedIndex < nedLen; nedIndex++) {
                    if(haystack[hasIndex + nedIndex] !== needle[nedIndex]){
                        break;
                    }
                    if(nedIndex == nedLen - 1){
                        return hasIndex;
                    }
                }
            }
        }
    }
    return -1;
}
/*****************
 * 复杂度分析
 
 * 时间复杂度: O(n2)
    假设长字符串长度为无限大的 n，那么对比字符串长度最大为 n−1，那么就需要对比
    (n−1)∗n=n2 −n 次。当 n 趋近无限大时，n2 要远远大于 n，因此忽略减数 n， 那么时间复杂度为 O(n2)
 * 空间复杂度: O(1)
    使用 2 个额外存储空间
 */
/*************************-7.实现strStr()-*********************************************/
 


/*************************8.最长公共前缀*********************************************/
/**********************
 * 编写一个函数来查找字符串数组中的最长公共前缀。 
 * 如果不存在公共前缀，返回空字符串 ""。
 */
/************************
 * 方法一 递归迭代
 * 思路
 *  查找 n 个字符串的最长公共前缀，可以拆分成两步: 1. 查找前 n-1 个字符串的最长公共前缀 m 2. 查找 m 与最后一个字符串的公共前缀
 *  因此，我们可以得到递归公式:
 *  $longestCommonPrefix([S1, S2, ..., Sn]) = findCommPrefix(longestCommonPrefix([S1, S2, ..., Sn- 1]), Sn)$
 *  我们只需要实现 findCommPrefix 方法，然后遍历数组即可。 
 * 详解
 *   1. 获取数组中第一个字符串，当做最长公共前缀保存到变量CommonPrefix
 *   2. 从数组中取出下一个字符串，与当前的最长公共前缀CommonPrefix对比，得到新的最长公共
 *      前缀存到 commonPrefix
 *   3. 重复第 2 步遍历完整个字符串，最后得到的即使数组中所有字符串的最长公共前缀
 */
const longestCommonPrefix = function(strs) {
    function findCommPrefix(a,b) {
        let i = 0;
        while(i < a.length && i < b.length && a.charAt(i) === b.charAt(i)){
            i++;
        }
        return i > 0 ? a.substring(0,i) : '';
    }
    if(strs.length > 0) {
        let commonPrefix = strs[0];
        for (let index = 1; index < strs.length; index++) {
            commonPrefix = findCommPrefix(commonPrefix,strs[index]);
        }
        return commonPrefix;
    }
    return '';
}
/****
 * 复杂度分析
 *  时间复杂度: O(n) 最坏的情况下，所有个字符串都是相同的。那么会将所有字符串的所有字符串都遍历比较一次 这样就会进行 n 次字符比较，其中 n 是输入数据中所有字符数量。 最好的情况下，所有的
 *  字符串都不一样，那么每个字符串只会访问一次，复杂度是 n, n即数组长度。 
 * 空间复杂度: O(1) ，除了保存当前公共前缀外无需其他存储空间。
 */

/*************************9.最长回文子串*********************************************/
/*************************
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */
/*
方法一 动态规划法
思路
动态规划的思想，是希望把问题划分成相关联的子问题;
然后从最基本的子问题出发来推导较大的 子问题，直到所有的子问题都解决。

根据字符串的长度，建立一个矩阵 dp, 通过不同情况的判断条件，
通过 dp[i][j] 表示 s[i] 至 s[j] 所代表的子串是否是回文子串。

详解
1. 建立矩阵 dp
2. 循环遍历字符串，取得不同长度的子串
3. 不同长度的子串，根据不同的条件进行判断是否为回文子串
    (1)长度为 1，一定回文
    (2)长度为 2 或 3，判断首尾是否相同:s[i] === s[j]
    (3)长度 > 3, 首尾字符相同，且去掉首尾之后的子串仍为回文:(s[i] === s[j]) && dp[i + 1][j - 1]
4. 取得长度最长的回文子串
*/
 
const longestPalindrome = function (s) {
    const dp = [];
    for (let index = 0; index < s.length; index++) {
        dp[index] = [];
    }
    let max = -1;
    let str = '';
    for (let l = 0; l < s.length; l++) {
        // l 为所遍历的子串长度 - 1，即左下标的长度
        for (let i = 0; i + l < s.length; i++) {
            const j = i+l;
            if(l==0){
                dp[i][j] = true;
            } else if(l <= 2){
                // 长度为2或3时，首尾相同则是回文子串
                if(s[i] === s[j]){
                    dp[i][j] = true;
                } else {
                    dp[i][j] = false;
                }
            } else {
                // 长度大于3时，若首尾字符相同且去掉之后的子串仍未回文，则为回文子串
                if ((s[i] === s[j]) && dp[i+1][j-1]) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = false;
                }
            }
            if (dp[i][j] && l > max) {
                max = l;
                str = s.substring(i,j+1);
            }
        }
    }
    return str;
}
/***
 * 复杂度分析
 *   时间复杂度: O(n2) 遍历次数取决于字符串的长度，因为是两层循环嵌套，所以遍历的最大 次数为 n2 。
 *   空间复杂度: O(n) 需要申请空间为字符串长度 n 的数组来记录不同长度子串的情况。
 */

 /***
  * 外层循环从0开始一直到末尾
  * 内存循环，内存循环+外层循环<子串串长度，然后采取对比政策
  */

/*************************10.罗马数字转整数*********************************************/
/***
 * 罗马数字包含以下七种字符:I， V， X， L，C，D 和 M。 
 * 分别对应的数值为:1 ，5，10，50，100，500，1000 。
 * 例如， 罗马数字 3 写做 III，即为三个并列的 1。12 写做 XII，即为 X+II。 26 写做 XXVII, 即为 XX+V+I。
 * 通常情况下，不能出现超过连续三个相同的罗马数字并且罗马数字中小的数字在大的数字的右边。 
 * 但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小 数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况:
 *
 * 1 I 可以放在 V(5) 和 X(10) 的左边，来表示 4 和 9。
 * 2 X 可以放在 L(50) 和 C(100) 的左边，来表示 40 和90。
 * 3 C 可以放在 D(500) 和 M(1000) 的左边，来表示 400 和 900。
 * 
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 */
/***
 * switch + includes 法
 * 思路
 * 先遍历所有罗马数字进行累加，对于特殊数字的循环，比如:5+1=6，而实际是 4，相差 2，
 * 所以 需要在结果上减去 2，以此类推。
 */
const romanToIntTwo = function(num){
    let result = 0;
    for (const c of num) {
        switch (c) {
            case 'I':
                result += 1;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                result += 100;
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
        }
    }
    //减去特殊组合
    if(num.includes('IV') || num.includes('IX')) result -= 2;
    if(num.includes('XL') || num.includes('XC')) result -= 20;
    if(num.includes('CD') || num.includes('CM')) result -= 200;
    return result;
}
const romanToIntOne = function(num) {
    const roman = {
        IV:4,
        IX:9,
        XL:40,
        XC:90,
        CD:400,
        CM:900
    }
    const list = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let result = 0;
    // 先遍历特俗值
    for (const key in roman) {
        // 检测输入值是否含有特殊值
        if (num.includes(key)) {
            // 用正则去掉特殊值
            const reg = new RegExp(key);
            num = num.replace(reg,'');
            result += roman[key];
        }
    }
    for (const i of num) {
        // 累加正常罗马数
        result += list[i];
    }
    return result;
}

/*************************11.（Fizz Buzz）*********************************************/
/***
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 1. 如果 n 是 3 的倍数，输出“Fizz”;
 * 2. 如果 n 是 5 的倍数，输出“Buzz”;
 * 3. 如果 n 同时是 3 和 5 的倍数，输出 “FizzBuzz”。
 */
/***
 * 方法一 遍历
 * 思路
 * 很简单，只需要判断 1 - n 的每个数字是否能被 3、5、15 整除，输出对应的字符串即可。 详解
 * 1. 第一步，申请一个数组 arr，用于存放每个数字转换后字符串。
 * 2. 第二步，循环遍历 1-n 的每个数字。如果该数字能被15整除(即取余为0)，则该数字对应的 字符串为 "FizzBuzz";如果能被3整除，则为 "Fizz";如果能被5整除，则为 "Buzz";否则，为 该数字即可。
 */
const fizzBuzz = function(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if(i % 15 === 0){
            arr.push('FizzBuzz');
        } else if(i % 3 === 0){
            arr.push('Fizee');
        } else if(i % 5 === 0) {
            arr.push('Buzz');
        }else {
            arr.push(i.toString());
        }
    }
    return arr;
}
/****************************************
 * 复杂度分析
 * 时间复杂度: O(n)
 *  上述解法中，每个数字都被遍历了一次，时间复杂度跟数字的个数 n 线性相关，因此为O(n)。
 * 空间复杂度: O(n)
 *  上述解法中，申请了大小为 n 的数组空间，空间复杂度跟数字的个数 n 线性相关，因此为O(n)。
 */

/*************************12.计算质数*********************************************/
/********************************
 * 统计所有小于非负整数 n 的质数的数量。
 * 示例
 * 输入:10
 * 输出:4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2,3,5,7 。
 */
const isPrime = function(n){
    // 判断是否为质数
    // if(n===2 || n===3){
    //     return true;
    // }
    // if(n % 6 !== 1 && n % 6 !== 5){
    //     return false;
    // }
    // const sqrtn = Math.sqrt(n);
    // for (let index = 0; index <= sqrtn; index += 2) {
    //     if (n % index === 0) {
    //         return false;
    //     }
    // }
    
    for (let index = 2; index <= n-1; index++) {
        if(n%index === 0){
            return false;
        }
    }
    return true;
}
// 返回质数数量
const countPrimes = function(n){
    let count = 0;
    for (let index = 2; index < n; index++) {
        if(isPrime(index)){
            console.log('质数>'+index);
            count++;
        } 
    }
    return count;
}
/*************************13.[3的幂]*********************************************/
/***
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 * 题目分析
 * 3 的幂，顾名思义，需要判断当前数字是否可以一直被 3 整除 
 * 特殊情况:如果 n === 1 ，即 3 的 0 次幂的情况，应输出 true
 * 
 * 
 * 方法一 循环求解 思路
 * 基本想法，可以利用循环解决。排除特殊情况后，用待确定的数字 n ，循环除以 3，看是否能被 3 整除。
 * 详解
 *  1、判断特殊情况，若待定值 n 小于 1 则直接返回 false
 *  2、循环判断待定值 n 是否可以被 3 整除
 *  3、若不可以被 3 整除则返回 false ，若可以则将该数字除以 3，直至循环结束 4、其余情况则返回 true
 */
const isPowerOfThree = function(n){
    if(n < 1) return false;
    while(n>1){
        // 如果该数字不能被 3 整除，则直接输出 false
        if(n%3 !== 0){
            return false;
        } else {
            n = n / 3;
        }
    }
    return true;
}
/**
 * @description: 递归方式
 * @param {type} 
 * @return: 
 */
const isPowerOfThreeOther = function(n){
    if(n === 1) return true;
    if(n < 0) return false;
    if(n%3 === 0) {
        return isPowerOfThreeOther(n / 3);
    }
    return false;
}
/*************************14.[Excel表列序号]*********************************************/
/****
 * 思路
 * 因为有26个字母，相当于 26 进制转 10 进制 
 * 详解
 * 1. 26 进制 转化 10 进制公式，ans = ans * 26 + num 
 * 2. 比如:AB = 126 +2 = 28，ZY=2626+25 = 701
 * 
 * 示例
 * A->1
 * B->2
 * C->3
 * ...
 * Z->26
 * AA->27
 * AB->28
 * 输入: "A",
 * 输出:1
 * 输入: "AB",
 * 输出: 28
 * 
 */
const titleToNumber = function(s){
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const len = s.length;
    let sum = 0;
    for (let index = 0; index < len; index++) {
        const tempLeft = arr.indexOf(s[index]) + 1;
        const tempRight = Math.pow(26,len - 1 - index);
        sum = tempLeft * tempRight + sum;
    }
    return sum;
}
/****
 * ps
 * 进制转换的问题，26的N次方
 */
/****
 * 复杂度分析
 * 时间复杂度: O(n) 对于每个元素，通过一次遍历数组的其余部分来寻找它所对应的目标元素，这将耗费 O(n)
   的时间。 
 * 空间复杂度: O(1)
 * 由于算法中临时变量得个数与循环次数无关，所以空间复杂度为 O(1)

 */

 /*************************15.[快乐数]*********************************************/
 /****
  * 编写一个算法来判断一个数是不是“快乐数”。
  * 
  * 一个“快乐数”定义为:对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后 
  * 重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个 
  * 数就是快乐数。
  * 示例
  *  输入:19
  *  输出: true
  * 解释:
  *  1^2+9^2=82
  *  8^2+2^2=68
  *  6^2+8^2=100
  *  1^2+0^2+0^2=1
  * 
  * 
  * 方法一 尾递归
  * 思路
  * 
  * 根据示例来看，函数的执行过程是一个可递归的过程，首先，我们先写一个递归函数来模拟这个执 
  * 行过程，然后按照示例 输入 19 来验证编写函数正确性， 然后 输入 任意数字(比方说 99999)， 
  * 这时，会发现报内存溢出的错误，那这道题就变成了如何解决堆栈溢出的问题: 首先，我们要考虑 
  * 的是，为什么会内存溢出?从题目中，我们可以看到"也可能是无限循环但始终变不到 1"，是"无限 
  * 循环"导致内存溢出， 那我们就应该想一个方式去终结这个"死循环"。首先我们要找到这个循环的规 
  * 律，怎么找?把递归内容打印(console.log)出来。这时，你会发现一个有规律的死循环。 那 
  * 么，我们只要用一个变量(once)记录已经输入过的值，一旦出现第二次相同输入，就终止递归， 
  * 并返回"非快乐数"的结果(false)。
  * 
  * 
  * 详解
  *  1. 申请一个变量来存放已经执行过函数的"输入",如果出现重复输入，则说明进入了死循环，从"示 例"来看:{19:true,82:true,100:true}
  *  2. 将输入(19)转化为数组([1,9])
  *  3. 将[1,9]进行平方和运算($1^2 + 9^2 = 82$)
  *  4. 判断平方和的结果是不是等于 1，若果是，则为"快乐数",否，则继续执行 fn 函数
  *  5. 直到平方和等于 1 或者判定为死循环。  
  */

const fn = function(n,once){
    // 怎么就出现了相同的数字之后就返回false了
    if(once[n]){
       return false;
    }
    const list = n.toString().split('');
    let result = 0;
    once[n] = true;
    for (let index = 0; index < list.length; index++) {
        result += Math.pow(parseInt(list[index],10),2);
    }
    if(result === 1){
        return true;
    }else{
        return fn(result,once);
    }
}
  /**
   * @description: 方法一：快乐数
   * @param {number} 
   * @return: {boolean}
   */
  const isHappy = function(n){
      const once = {};
      return fn(n,once);
  }

  /**
   * @description: 方法二：快乐数
   * @param {number} 
   * @return: {boolean}
   * 
   * 
   * 
   * 1. 已知非快乐数[4,16,37,58,89,145,42,20]
   * 2. 已知快乐数:1
   * 3. 将输入(19)转化为数组([1,9])
   * 4. 将[1,9]进行平方和运算(1^2 + 9^2 = 82)
   * 5. 判断平方和的结果是不是等于 1，如果是，则为"快乐数",否，则继续执行 fn 函数
   * 6. 直到平方和等于 1 或者判定为非快乐数。
   */
  const isHappyOther = function(n){
      if(n===1){
          return true;
      }
      if (n===4) {
          return false;
      }
      let result = 0;
      const list = n.toString().split('');
      for (let index = 0; index < list.length; index++) {
          result += Math.pow(parseInt(list[index],10),2);
      }
      if(result === 1){
          return true;
      } else {
        return isHappyOther(result);
      }
  }

  /*************************16.[阶乘后的零]*********************************************/
  /*********** 
   * 给定一个整数 n，返回 n! 结果尾数中零的数量。
   * 
   * 示例1
   * 输入:3
   * 输出:0
   * 解释: 3! = 6, 尾数中没有零。
   * 
   * 示例1
   * 输入:5
   * 输出:1
   * 解释:5!=120, 尾数中有 1 个零.
   * *******/
  /*********
   * 方法一 暴力法
   * 思路
   * 1. 尾数中有 0 必定是 10 的倍数
   * 2. 尾数中有多少个 0 就是整个数能有多少个因子 10
   * 3. 因子 10 又可以拆成 2 5，因此就是找整个数字可以拆分成多少了 2 5
   * 4. 因为在因子中 2 的数量一定比 5 多，所以实际上我们只要找到因子 5 的个数就可以找到尾数中
     0 的个数了，所以这个问题就可以转换成找因子 5 的个数。
   * 详解
   * 1. 循环 1 ~ n，找出能被 5 整除的数字
   * 2. 找到能被 5 整除的数字，找该数字能被拆分成多少个因子 5 3. 所有的个数相加就是尾数 0 的个数
   *****/
  const trailingZeroes = function (n){
      let count = 0;
      for (let index = 1; index < n; index++) {
          let num = i;
          if(num % 5 === 0){
              while (num % 5 === 0 && num !== 0) {
                  count += 1;
                  num = parseInt(num / 5);
              }
          }
          
      }
      return count;
  }
  /*******
   * 复杂度分析
   * 时间复杂度为: O(n2)
     因为要进行两次循环，所以时间复杂度为 O(n2) ，当数字比较大的时候有性能问题 
   * 空间复杂度: O(1)
     没有申请额外空间，所以空间复杂度为 O(1)
   * 
   ***/



   /*********
   * 方法二 
   * 思路
   * 整体思路和方法一基本一致，都是找因子5的个数，只是方法二是在找因子5的个数时做文章，用耗 时更少的方法来找5的个数
   * 详解
   * 1. n! 这些乘数中，每隔 5 个数，肯定会有一个数至少能拆出一个 5 因子。所以 n / 5 = 至少会出 现的 5 的个数。
   * 2. 因为 n / 5 并不能完全算出 5 因子的个数，比如若某个数 25 = 5 * 5，分解后得到的 5 也算一 个，所以能被 25 因式分解相当于会出现 2 个 5 因子，而第一步中除以 5 算个数的时候已经算 了一个了，所以相当于比之前会多一个 5 因子
   * 3. 依此类推，能被 25 5 = 125 因式分解的相当于比之前按 25 因式分解的时候又多出一个 5 因 子。能被 125 5 = 625 因式分解的相当于比按 125 因式分解时又多出一个 5 因子。还有 625 * 5 ......
        所以n! 的结果可以拆分为多少个 5 因子呢:
        n/5 + n/25 + n /125 + n/625 + ...
    *****/
   function trilingZeroesOther(n){
       let count = 0;
       while (n > 0) {
           n = parseInt(n / 5);
           count += n;
       }
       return count;
   }
   /***** 
    * 复杂度分析:
    * 时间复杂度: O(log(n)) ，
      遍历次数为 n/5x = 1 ;即 x = log5(n) ，所以时间复杂度为 O(log(n)) 
    * 空间复杂度: O(1)
      没有申请额外空间，所以空间复杂度为 O(1)
    * 
    ******/