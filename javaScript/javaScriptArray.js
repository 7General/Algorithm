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

    var dupa = [1,1,2,2,3]
    removeDuplicates(dupa)
    console.log(dupa)
    
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
const removeDuplicates = function(nums) {
    // 遍历数组
    for (let index = 1; index < nums.length; index++) {
        // 若该元素的相邻项与之相同，则删除该元素
        if (nums[index - 1] === nums[index]) {
            nums.splice(index-1,1);
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
const removeDuplicatesOther = function(nums) {
    let count = 0;
    for (let index = 1; index < nums.length; index++) {
        // 若该下标的值跟不重复的数组最后一个元素不相同，则该值添加到不重复数组后一位
        if(nums[count] !== nums[index]){
            nums[count+1] = nums[index]
            count++;
        }
    }
    // 因为count从0开始，长度要加一
    return count+1;
}
/***
 * 复杂度分析
 * 时间复杂度: O(n) 
 * 空间复杂度: O(1)
 */

