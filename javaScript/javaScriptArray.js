window.onload = function () {
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
    var nums = [1, 2, 3, 4, 5, 6]
    roate(nums, 2)
    console.log(nums)

    var dupa = [1, 1, 2, 2, 3]
    removeDuplicates(dupa)
    console.log(dupa)

    var digs = [9, 8]
    plusOne(digs)
    console.log(digs)

    var moveZ = [0, 1, 0, 3, 0];
    moveZeroes(moveZ)
    console.log(moveZ)

    var dupArry = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    console.log(containsDuplicate(dupArry))


    var groupArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
    // console.log(groupAnagrams(groupArray));


    var threeNum = [-1, 0, 1, 2, -1, -4];
    console.log(threeSum(threeNum));

    var longestStr = 'abcabcbb'
    console.log(lenngthOfLongestSubstring(longestStr));

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

const roate = function (nums, k) {
    const l = nums.length;
    k = k % l;
    for (let index = 0; index < k; index++) {
        nums.unshift(nums.pop());
    }
}
/***
 * - (void)roateArray:(NSArray *)array roateNext:(NSInteger)k {
 *  if (0 == array.count) return;
    NSInteger arrayCount = array.count;
    NSMutableArray * tempArray = [[NSMutableArray alloc] initWithArray:array];
    for (NSInteger index = 0; index < array.count; index++) {
        tempArray[((index + k) % arrayCount)] = array[index];
    }
    NSLog(@"---tempArray:%@",tempArray);
}
 * 
 * 
 */



/*************************2.从排序数组中删除重复项*********************************************/
/****
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数 组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 
 * 方法一
 * 思路
 * 我们先遍历数组，若发现相同的相邻项，将该元素删除。此时数组的长度也会发生变化，我们需要 把 i - 1，保证遍历顺序不会出错。最后，再返回数组的长度。
 * 详解
 * 1. 遍历数组里的元素;
 * 2. 判断该元素的相邻项是否与之相同;
 * 3. 若相同，则删除该元素，同时将数组长度减一，继续遍历; 
 * 4. 待遍历结束时，返回数组的新长度。
 * 代码
*/
const removeDuplicates = function (nums) {
    // 遍历数组
    for (let index = 1; index < nums.length; index++) {
        // 若该元素的相邻项与之相同，则删除该元素
        if (nums[index - 1] === nums[index]) {
            nums.splice(index - 1, 1);
            // 因删除该元素后，数组长度会减一，故index也需要减一
            index--;
        }
    }
    return nums.length;
}
/***
 * 复杂度分析
 * 时间复杂度: O(n)
 * 共执行了 n 次，因此时间复杂度为 O(n) 。 
 * 空间复杂度: O(1)
 * 没有申请额外的空间，因此空间复杂度为 O(1)。
 * 
 * 
 * splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
 * 注释：该方法会改变原始数组。
 */


/***
 * 方法二 思路
 * 我们用 count 来记录不重复的下标数量，第一个数必定不是重复的，即 nums[0] 肯定是不重复的， 所以从第二项(即 nums[1])开始，遍历数组，判断该下标的值跟不重复的数组最后一个元素 nums[count] 是否相同，如果不相同，将该元素值赋值给 nums[count + 1] ，然后 count++，继续遍 历。待遍历结束时，我们可以通过 count 数量来判断不重复元素个数，因为 count 是从 0 开始的， 故返回的新数组的长度为 count + 1。
 * 比如原数组为 [0,0,1,1,1,2,2,3,4]，经过遍历会变成类似 [0,1,2,3,4,x,x,x,x] 的结构，此时 count = 4，返 回新数组长度 count + 1 = 5。
 * 详解
 * 1. 创建字段 count，用来记录不重复的下标数量，初始值为 0;
 * 2. 因数组的第一个元素(即 nums[count = 0])必定是不重复的，故从数组第二项开始(即
 * nums[1])开始，遍历数组里的元素;
 * 
 * 3. 判断数组当前元素是否与 nums[count] 相等，若不同，得知当前元素并未重复，将该元素值赋
 * 值给 nums[count + 1] ，然后 count++，继续遍历;
 * 
 * 4. 待遍历结束，我们可以通过 count 数量来判断不重复元素个数，因为 count 是从 0 开始计数
 * 的，故返回的新数组的长度为 count + 1。
 */
const removeDuplicatesOther = function (nums) {
    let count = 0;
    for (let index = 1; index < nums.length; index++) {
        // 若该下标的值跟不重复的数组最后一个元素不相同，则该值添加到不重复数组后一位
        if (nums[count] !== nums[index]) {
            nums[count + 1] = nums[index]
            count++;
        }
    }
    // 因为count从0开始，长度要加一
    return count + 1;
}
/***
 * 复杂度分析
 * 时间复杂度: O(n) 
 * 空间复杂度: O(1)
 */

/*************************3.加一*********************************************/
/**给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 1 输入: [1,2,3]
 * 2 输出: [1,2,4]
 * 3 解释: 输入数组表示数字 123。
 * 
 * 
 * 进位相加
 * 思路 
 * 我们可以模拟加法的操作
 * 详解
 * 在实际情况中，加一有且只有以下两种情况:
    9 加一进位 
    其他数字加一
 * 先把个位的数加一，如果没有进位就直接推出循环。
 * 如果进位了，再把十位的数加一，个位数设置为0，如此循环，，直到判断没有再进位就退出循环 返回结果。
 * */
const plusOne = function (digits) {
    // 从末尾开始
    for (let index = digits.length - 1; index >= 0; index--) {
        digits[index]++;
        digits[index] = digits[index] % 10;
        // 不等于0，直接返回，说明没有进位情况
        if (digits[index] !== 0) {
            return digits;
        }
    }
    digits.splice(0, 0, 1);
    return digits;
}
/***
 * 复杂度分析
 * 时间复杂度: O(n) 复杂度与输入数组的长度线性相关，复杂度为 O(n) 
 * 空间复杂度: O(1)
 * 没有申请额外空间，复杂度为 O(1)
 */

/*************************4.买卖股票的最佳时机 II*********************************************/
/****
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易(多次买卖一支股票)。
 * 注意:你不能同时参与多笔交易(你必须在再次购买前出售掉之前的股票)。
 * 
 * 输入: [7,1,5,3,6,4]
 * 2 输出:7
 * 3 解释: 在第 2 天(股票价格 = 1)的时候买入，在第 3 天(股票价格 = 5)的时候卖出,这笔交易 
 * 4 随后，在第 4 天(股票价格 = 3)的时候买入，在第 5 天(股票价格 = 6)的时候卖出, 这
 * 
 * 输入: [1,2,3,4,5]
 * 输出:4
 * 解释: 在第 1 天(股票价格 = 1)的时候买入，在第 5 天 (股票价格 = 5)的时候卖出, 这笔交易
 * 注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。 
 * 因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 * 
 * 输入: [7,6,4,3,1]
 * 2 输出:0
 * 3 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 思路
 * 定一个滑动窗口，滑动窗口内所有的价格从后向前是递减，如若不是则调整下标，满足该条件。前 
 * 一个下标从后向前遍历，两个下标初始位置为数组最后一个。如果遇到价格不是递减，则相减得出 
 * 利润差，并移动两个下标到新的起点。如此遍历直到第一日。
 * 
 * 
 * 详解
 * 1. 初始化滑动窗口的两个下标，前下标从后向前遍历。
 * 2. 如果遇到价格不是递减的情况，则相减得出利润差，并移动两个下标到新的起点。 
 * 3. 如此遍历直到第一日。
 */
const maxProfit = function (prices) {
    // 总利润
    let num = 0;
    // 滑动窗口后一个下标
    let aftOff = prices.length - 1;
    // 滑动窗口前一个下标
    let offset = prices.length - 1;
    while (offset > 0) {
        // 价格递减则移动前一个下标，否则计算出利润差并移动两个下标到新的起点
        if (prices[offset] > prices[offset - 1]) {
            offset -= 1;
        } else {
            num += prices[aftOff] - prices[offset];
            offset -= 1;
            aftOff = offset;
        }
    }
    // 价格递减到第一日情况的逻辑补充
    if (aftOff !== offset) {
        num += prices[aftOff] - prices[offset];
    }
    return num;
}
/****
 * 复杂度分析
 * 时间复杂度: O(n)
 * 假设 $n$ 为给定数组的长度，while 循环执行了 n 次，因此，时间复杂度为 O(n) 。 
 * 空间复杂度: O(1) 该解法中，申请了常数个变量，因此，空间复杂度为 O(1) 。
 */

/****************************强烈推荐此方法*************************
 * 方法二
 * 思路
 * 遍历每日的价格，从第二天起，如果每日的价格都比前一日的价格高，则相减得出利润差，累加在 总利润上，直到遍历到最后一日。
 * 详解
 * 1. 从前向后遍历数组，从第二个开始
 * 2. 如果当前日的价格比前一日的价格高，则相减得出利润差，累加在总利润上。 
 * 3. 遍历到最后一日，退出循环，返回总利润
*/
const maxProfitOther = function (prices) {
    // 总收益
    const totalBenefit = 0;
    // 当前日下标
    const offset = 1;
    const len = prices.length;
    while (offset <= len - 1) {
        // 如果当前日的价格比前一日价格高，则相减得出收益
        const curPrice = prices[offset];
        const prePrice = prices[offset - 1];
        if (curPrice > prePrice) {
            totalBenefit += curPrice - prePrice;
        }
        offset += 1;
    }
    return totalBenefit;
}
/***
 * 复杂度分析
 * 时间复杂度: O(n)
 * 空间复杂度: O(1)
 */
/*************************5.移动零*********************************************/
/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。 示例

 * 1 输入: [0,1,0,3,12]
 * 2 输出: [1,3,12,0,0]
 * 说明
 * 1. 必须在原数组上操作，不能拷贝额外的数组。
 * 2. 尽量减少操作次数。
 * 注意事项
 * 1. 由于题目要求必须在原数组上操作，数组的 filter Api 或是 sort 算法，都是不必考虑的。
 * 2. 切记不要边遍历数组边修改数组长度，如:splice，push，pop等。
 * 
 * 方法二 双指针优化
 * 
 * 思路 
 * 方法一进行了两次循环，还能进一步优化，只循环一次。
 * 
 * 详解
 * 思路与方法 1 极其相似，依次用非零元素与零元素交换即可，优点在于一步到位，不用再次填充0。 
 * 1. 用 j 记录非零元素的下标，初始为 0 
 * 2. 依次用非零元素与 j 对应元素交换位置，每次交 换后， j 加 1， j 对应元素就被替换成了 0(除初始值) 
 * 3. 零元素不用处理，会被替换或者保持不变。
 */
const moveZeroes = function (nums) {
    let j = 0;
    let temp = '';
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp;
            j++;
        }
    }
}

/*************************6.两个数组的交集*********************************************/
/****
 * 给定两个数组，计算数组交集。
 * 1. 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。 2. 我们可以不考虑输出结果的顺序。
 * 示例

 * 1 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 2 输出: [2,2]
 *
 * 1 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 2 输出: [4,9]
 * 
 * 方法一 模拟哈希
 * 
 * 思路
 * 遍历第一个数组，将第一个数组的值、该值出现的次数，以(key:value)的形式存储下来，接着遍历 第二个数组，判断是否在(key:value)中存在，存在则 value 减去 1，继续。
 * 详解
 * 1. 定义模拟哈希的对象 hashObject、定义 result 数组存放最终符合条件的结果;
 * 2. for 循环遍历第一个数组，将数组中每个值作为 key、出现次数作为 value 存到 hashObject 对
    象中，第一次出现 value 为 1，再次出现 value 加 1;
 * 3. for 循环遍历第二个数组，判断第二个数组中每个值是否在 hashObject 中存在，即在
   hashObject 作为 key 对应的 value 为 1 或者大于 1，如果存在将该值 push 到 result 数组中，
   并将该值对应的 value 减去 1;
 * 4. 返回 result 即可;
 */
const intersect = function (nums1, nums2) {
    const hashObject = {}
    for (let i = 0; i < nums1.length; i++) {
        if (hashObject[nums1[i]]) {
            hashObject[nums1[i]] += 1;
        } else {
            hashObject[nums1[i]] = 1;
        }
    }
    const result = [];
    for (let j = 0; j < nums2.length; j++) {
        if (hashObject[nums2[j]]) {
            result.push(nums2[j])
            hashObject[nums2[j]] -= 1;
        }
    }
    return result;
}

/*************************6.一周中的第几天一周中的第几天*********************************************/
/****
 * 
 * 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。 输入为三个整数:day、month 和 year，分别表示日、月、年。
 * 您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。
 * 说明:给出的日期一定是在 1971 到 2100 年之间的有效日期。 
 * 示例 1:
 * 输入:day = 31, month = 8, year = 2019
 * 输出:"Saturday"
 * 示例 2:
 * 输入:day = 18, month = 7, year = 1999 
 * 输出:"Sunday"
 * 示例 3:
 * 输入:day = 15, month = 8, year = 1993
 * 输出:"Sunday"
 */
const dayOfTheWeek = function (day, monthy, year) {
    const date = new Date(Date.parse('${year}/${month}/${day}'));
    const Week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return Week[date.getDay()];
}

const dayOfTheWeekOther = function (dat, month, year) {
    const Month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const Week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    // 1970年12月31日为星期四，即初始值为4
    let count = 4;
    // 算上此年前每年的日期，都先当365天算
    count += (year - 1970 - 1) * 365;
    // 算上此月前每个月的日期
    for (leti = 1; i < month; i++) {
        count += Month[i - 1];
    }
    // 算上此月的日期
    count += day;
    // 加上今年之前的闰年天数 for(lety=1971;y<=year-1;y++){
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
        count++;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        if (month > 2) {
            count++;
        }
    }
    return Week[count % 7];
}
/*************************7.存在重复元素*********************************************/
/***
 * 
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回
 * false。 
 * 示例1
 * 输入: [1,2,3,1]
 * 输出: true
 * 
 * 输入: [1,2,3,4]
 * 输出: false
 * 
 * 输入: [1,1,1,3,3,4,3,2,4,2]
 * 输出: true
 */
const containsDuplicate = function (nums) {
    let index = 0;
    for (let i = 1; i < nums.length; i++) {
        let left = nums[i];
        let right = nums[index];
        if (left === right) {
            index++;
        }
    }
    if (index > 0) {
        return true;
    } else {
        return false;
    }
}
/*************************8.字谜分组*********************************************/
/****
 * 
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 *
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * [
 *  ["ate","eat","tea"],
 *  ["nat","tan"], 
 *  ["bat"]
 * ]
 * 
 * 方法一 排序分类 思路
 * 我们先遍历数组，把每个字母异位词都进行排序。再将排序后的字符串作为 key，将 key 值一样的 字母异位词置于同一个数组中。最后，再按照题目所要求的格式返回数组。
 * 详解
 * 1. 创建个空对象 obj，用于后续将字母异位词分类储存;
 * 2. 创建个空数组 arr，用与后续返回结果;
 * 3. 遍历数组里的元素;
 * 4. 将每个字母异位词进行排序，并将排序后的字符串作为 key，可知 key 值一样的即为字母异位
 * 词，将他们置于同一个数组中(即 obj["aet"] = ["ate","eat","tea"]);
 * 5. 待上述遍历结束，再遍历 obj，将 obj 的每一个值，push 到 arr 中。
 * 
 * 代码
 */
const groupAnagrams = function (strs) {
    const obj = {};
    const arr = [];
    // 遍历数组
    for (let i = 0; i < strs.length; i++) {
        // 将每个字母异位词进行排序，并将排序后的字符串作为key
        const unit = Array.from(strs[i].sort()).join('');
        // 将key值一样的字母异位词置于同一个数组中
        if (!obj[unit]) {
            obj[unit] = [];
        }
        obj[unit].push(strs[i]);
    }
    for (const i in obj) {
        arr.push(obj[i]);
    }
    return arr;
}

/*************************9.三数之和*********************************************/
/*** 
 * 给定一个包含 n 个整数的数组 nums ，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + 
 * c = 0 ?找出所有满足条件且不重复的三元组。
*/
const threeSum = function (nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        let left = i + 1;
        let right = length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push(nums[i], nums[left], nums[right]);
                // 去重
                const leftValue = nums[left];
                while (left < length && nums[left] === leftValue) {
                    left++;
                }

                const rightValue = nums[right];
                while (rightValue > left && nums[right] === rightValue) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
        // 相同数组时直接+1
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
    }
    return res;
}


const threeSumForTarget = function (nums, target) {
    const res = [];
    nums.sort((a, b) => a - b);
    const length = nums.length;

    let ans = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < length; i++) {
        let left = i + 1;
        let right = length - 1;
        while (left < right) {
            let tempSum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - tempSum) < Math.abs(target - ans)) {
                ans = tempSum;
            }
            if (tempSum < target) {
                left++;
            } else if (tempSum > target) {
                right--;
            } else {
                return ans;
            }
        }
    }
    return ans;
}
/*************************10.无重复字符的最长子串*********************************************/
/***
 * 
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 示例1
 * 输入: "abcabcbb"
 * 输出:3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 输入: "bbbbb"
 * 输出:1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 输入: "pwwkew"
 * 输出:3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 从前到后遍历字符串，维护一个string，记录着不重复字符子串。 每当遇到重复的字符时候，找到 
 * string中重复的字符，并截断。 循环往复直到遍历最后一个字符.
 * 
 * 复杂度分析
 * 时间复杂度:$O(n)$
 * 这样子需要从前向后遍历一遍长度为 $n$ 的字符串，需要进行 n 次字符是否重复的比较。 空间复杂度:$O(n)$
 * 在计算比较过程中，数组最长有可能存放 n 个不重复字符串。
 * 方法二
 * 从前到后遍历字符串，维护一个string，记录着不重复字符子串。 每当遇到重复的字符时候，找到 string中重复的字符，并截断。 循环往复直到遍历最后一个字符.
 * 思路
 * 记录当前正在遍历的不重复字串的子集 string ， 在遍历过程中不断地添加不重复字符，遇到重复字
 * 符则截断 string 达到 string 内补字符不重复的条件。
 */

const lenngthOfLongestSubstring = function (s) {
    let num = 0;
    let max = 0;
    let subString = '';
    for (char of s) {
        if(subString.indexOf(char) === -1){
            subString += char;
            num++;
            max = max < num ? num : max;
        } else {
            subString += char;
            subString = subString.slice(subString.indexOf(char)+1);
            num = subString.length;
        }
    }
    return max
}
