//
//  RemoveElement.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/10/14.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "RemoveElement.h"
/*
 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 示例 1:
 给定 nums = [3,2,2,3], val = 3,
 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
 你不需要考虑数组中超出新长度后面的元素。
 示例 2:
 给定 nums = [0,1,2,2,3,0,4,2], val = 2,
 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
 注意这五个元素可为任意顺序。
 你不需要考虑数组中超出新长度后面的元素。
 说明:
 为什么返回数值是整数，但输出的答案是数组呢?
 请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 你可以想象内部操作如下:
 // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
 int len = removeElement(nums, val);
 // 在函数里修改输入数组对于调用者是可见的。
 // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
 for (int i = 0; i < len; i++) {
     print(nums[i]);
 }
 */

/*
 解题
 数组完成排序后，我们可以放置两个指针i 和j，其中i 是慢指针，而j 是快指针。只要nums[i]=nums[j]，我们就增加j 以跳过重复项。当我们遇到nums[j]≠nums[i]时，跳过重复项的运行已经结束，因此我们必须把它（nums[j]）的值复制到nums[i]。然后递增i，接着我们将再次重复相同的过程，直到j 到达数组的末尾为止。
 */

/*
 func removeElement(_ nums: inout [Int], _ val: Int) -> Int {
 if (nums.count == 0) { return 0 }
 var i = 0
 for j in 0..<nums.count {
 if nums[j] != val{
 nums[i] = nums[j]
 i += 1
 }
 }
 return i
 }
 */
@implementation RemoveElement
// 32235 3
- (NSInteger)removeElement:(NSMutableArray *)nums target:(NSInteger)val {
    if (0 == nums.count) return 0;
    NSInteger i = 0;
    for (NSInteger j = 0; j < nums.count; j++) {
        NSInteger res = [nums[j] integerValue];
        if (res != val) {
            nums[i] = nums[j];
            i += 1;
        }
    }
    return i;
}

@end
