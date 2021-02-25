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
// 第二次提交
// 第三次提交
// 第四次提交
/*************************2.打家劫舍!!!!!!!??????*********************************************/
/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约 
 * 因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统 会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到 的最高金额。
 
 * 示例
 * 输入: [1,2,3,1]
 * 输出:4
 * 解释:偷窃1号房屋(金额=1)，然后偷窃3号房屋(金额=3)。
  偷窃到的最高金额 =1+3=4 。

 * 输入: [2,7,9,3,1]
 * 输出:12
 * 解释:偷窃1号房屋(金额=2),偷窃3号房屋(金额=9)，接着偷窃5号房屋(金额=1)。
 偷窃到的最高金额 =2+9+1=12 。

 *  方法二
 *  思路
 * 由于不可以在相邻的房屋闯入，所以在当前位置 n 房屋可盗窃的最大值，要么就是 n-1 房屋可盗窃 
 * 的最大值，要么就是 n-2 房屋可盗窃的最大值加上当前房屋的值，二者之间取最大值 动态规划方 程:dp[n] = MAX( dp[n-1], dp[n-2] + num ) 总体的思路是一样的，方法一中，数组长度为 0，1，2 中单独处理，切换设计的求和变量过多，6 个可以利用数组变量优化。
 * 详解
 * 1. 获取房间的个数，如果为 0，就直接返回
 * 2. 设置一个 len+1 的数组变量，初始化数组中的第一个和第二个对象，这边就可以不用单独处理
       数组长度为 1 和 2 的情况
 * 3. 每次的循环求和的结果都记录在对于长度的数组对象中，不必声明多个变量暂存。
 * 4. 然后利用动态规划公式查找 n 个最大的数组和的值
 */
const rob = function(nums) {
    const len = nums.length;
    if(len === 0) return 0;
    const dp = new Array(len + 1);
    dp[0] = 0;
    dp[1] = nums[0];
    for (let index = 2; index < len; index++) {
        dp[index] = Math.max(dp[index-1],dp[index-2] + nums[index - 1]);
    }
    return dp[len];
}

/*************************3.跳跃游戏*********************************************/
/***
 * 给定一个非负整数数组，你最初位于数组的第一个位置。 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 * 
 * 示例1:
 * 输入: [2,3,1,1,4] 输出: true 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步
 * 到达最后一个位置。
 * 
 * 示例1:
 * 输入: [3,2,1,0,4] 输出: false 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长
 * 度是 0 ， 所以你永远不可能到达最后一个位置。
 * 方法一 贪心算法
 * 思路
 * 贪心算法的思路就是每到一个位置，都跳跃到当前位置可以跳跃的最大距离。当最后跳跃的最远距 离等于或大于最后一个位置的时候，我们就认为可以到达最后一个位置，返回true
 * 详解
 * 1. 首先我们初始化最远位置为0，然后遍历数组;
 * 2. 如果当前位置能到达，并且当前位置+跳数>最远位置，就更新最远位置;
 * 3. 每次都去比较当前最远位置和当前数组下标，如果最远距离小于等于当前下标就返回false。
 */
const canJump = function(nums){
    let max = 0;// 跳跃的最远距离
    for (let index = 0; index < nums.length - 1; index++) {
        // 找到能跳的最远的距离
        if(index + nums[index] > max){
            max = index + nums[index];
        }
        // 如果跳的最远的校园当前脚标，返回false
        if(max < index){
            return false;
        }
    }
    return true;
}
/***
 * 时间复杂度:$O(n)$
 * 只需要访问 nums 数组一遍，共 n 个位置，n 是 nums 数组的长度。 
 * 空间复杂度:$O(1)$
 * 在 max 变量分配内存情况下，内存不会随着遍历有增长趋势，不需要额外的空间开销。
 */


/*************************4.不同路径*********************************************/
/****
 * 一个机器人位于一个 m x n 网格的左上角，机器人每次只能向下或者向右移动一步。机器人试图达 
 * 到网格的右下角，问总共有多少条不同的路径?
 * 
 * 示例 1
 * 输入:m=3,n=2
 * 输出:3
 * 解释:
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1.向右->向右->向下
 * 2.向右->向下->向右
 * 3.向下->向右->向右
 * 
 * 思路
 * ABCD
 * EFGH
 * 从点 (x = 0, y = 0) 出发，每次只能向下或者向右移动一步，因此下一点的坐标为 (x + 1, y) 
 * 或者 (x, y + 1) ，一直到 (x = m, y = n) 。在上图中，H 只能从 G 或者 D 达到，因此从 A 到 H 
 * 的路径数等于从 A 到 D 的路径与从 A 到 G 的路径之和。得出路径数量
 * T (m, n) = T (m − 1, n) + T (m, n − 1) 。
 * 我们又发现，当$m = 1$ 或 $n = 1$ 时(只能一直往下或往右走)，路径数量为1，这里得出跳出递 
 * 归的条件。
 * 
 * 方法一 
 * 
 * 递归
 *  
 * 详解
 * 
 * 由上面的分析可得，到达(m,n)的路径数量为(m,n−1)坐标的路径数量与 (m−1,n)坐标 
 * 的路径数量之和 。可以使用最简单粗暴的递归方法
 * 代码
 */
const uniquePaths = function(m,n) {
    if(m === 1 || n === 1){
        return 1;
    }
    return uniquePaths(m - 1,n) + uniquePaths(m,n-1);
}

/*************************5.单词拆分*********************************************/
/***
 * 示例
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一 个或多个在字典中出现的单词。
 * 说明:
 * 拆分时可以重复使用字典中的单词。 你可以假设字典中没有重复的单词。 注意你可以重复使用字典中的单词。
 * 示例 1:
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
 */
const wordBreak = function(s,wordDict) {
    if(s.length === 0) return true;
    for (let index = 0; index < wordDict.length; index++) {
        const startIndex = s.indexOf(wordDict[index]);
        if(startIndex === 0) {
            // 将字符串去掉这个匹配到的前缀后继续遍历
            const temp = s.slice(startIndex + wordDict[index].length);
            if(wordBreak(temp,wordDict) === true){
                return true;
            }
        }
    }
    return false;
}

/*************************6.数组中的第K个最大元素*********************************************/
/***
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出:5
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出:4
 * 
 * 方法一
 * 思路
 * 首先通过快速排序的方法将数组升序排序，此时数组的头部为最小的元素，尾部为数组最大的元 素。
 * 题目要求找到数组中的第 K 个最大的元素，即返回 length - k 个元素即可。
 * 详解
 * 1. 本方法采用快速排序法;
 * 2. 首先通过 arr[Math.floor((start + end) / 2)] 找到数组中间的元素作为主元;
 * 3. 然后使用双指针，分别从数组的头部和尾部遍历数组;
 * 4. 遍历过程中，把比主元小的数都放到主元的左边，比主元大的数都放到主元的右边，实现数组
 * 的升序排序;
 * 5. 返回第 length - k 个元素，即为数组中第 k 个最大的元素。
 */
const findKthLargest = function(nums,k){
    return findK(nums,0,nums.length - 1,nums.length - k);
}

function findK(arr,start,end,k) {
    if(start === end) return arr[start];
    // 主元
    const pivot = arr[Math.floor((start + end) / 2)];
    let i = start; 
    let j = end;
    while(i < j) {
        while(arr[i] < pivot) i++;
        while(arr[j] > pivot) j--;
        if(i <= j){
            swap(arr,i,j);
            i++;
            j--;
        }
    }
    // 二分查到K位置
    if(k >= i - start) {
        return findK(arr,i,end,k-1+start);
    } else {
        return findK(arr,start,i-1,k);
    }
}

function swap(arr,i,j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function sendRequest(urls,max,callback) {
    let count = 0;//记录并发量
    let result = [];
    function request(){
        count++;
        fetch(urls.unshift()).thens((res)=>{
            // 完成一次 并发count-1
            count--;
            result.push(res);
            if(urls.length){
                // 下一次请求
                request();
            } else if(count === 0){
                callback && callback(result);
            }
        });
        // 重试
        if(count < max) {
            request();
        }
    }
    request();
}

sendRequest(urls,max,callback);
