//
//  ProfessionalNotice.m
//  AlgorithmNotice
//
//  Created by zzg on 2020/3/19.
//  Copyright © 2020 zzg. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ProfessionalNotice.h"

@implementation ListNode
- (instancetype)init
{
    self = [super init];
    if (self) {
        
    }
    return self;
}

@end


@implementation ProfessionalNotice

/**
 344. 反转字符串
 
 @param input <#input description#>
 @return <#return value description#>
 */
- (NSString *)reverseString:(NSString *)input {
    NSUInteger length = input.length;
    NSMutableArray *array = [NSMutableArray arrayWithCapacity:length];
    
    for(long i=length-1; i>=0; i--) {
        unichar c = [input characterAtIndex:i];
        [array addObject:[NSString stringWithFormat:@"%c",c]];
    }
    
    NSMutableString *str = [NSMutableString stringWithCapacity:length];
    for(int i=0; i<=length-1; i++) {
        [str appendString:array[i]];
    }
    return str;
}

/**
面试题03. 数组中重复的数字

@param nums <#nums description#>
@return <#return value description#>
*/
- (NSInteger)findRepeatNumber:(NSArray *)nums {
    if ([nums count] == 0) {
        return  - 1;
    }
    NSMutableArray * Array = [NSMutableArray array];
    NSMutableArray * resoultSet = [NSMutableArray array];
    for (NSString * item in nums) {
        if ([resoultSet containsObject:item]) {
            [Array addObject:item];
        } else {
            [resoultSet addObject:item];
        }
    }
    return 10;
}

/// 三数之和
/// @param nums <#nums description#>
/// @param target <#target description#>
- (NSInteger)threeSumClosest:(NSArray<NSNumber *> *)nums target:(NSInteger)target {
    [nums sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
        return obj1 < obj2;
    }];
    NSInteger ans = [nums[0] integerValue] + [nums[1] integerValue] + [nums[2] integerValue];
    for (NSInteger index = 0; index < nums.count; index++) {
        NSInteger start = index+1;
        NSInteger end = nums.count - 1;
        while (start < end) {
            NSInteger tempSum = [nums[start] integerValue] + [nums[index] integerValue] + [nums[end] integerValue];
            NSLog(@"---:index:%ld,start:%ld,end:%ld",index,start,end);
            NSLog(@"---:indexV:%d,startV:%d,endV:%d",[nums[index] integerValue],[nums[start] integerValue],[nums[end] integerValue]);
            ////            if (start == end) {
            ////                return 100;
            ////            }
            //            start++;
            //            end--;
            if (labs(target - tempSum) < labs(target -ans)) {
                ans = tempSum;
            }
            if (tempSum < target) {
                start ++;
            }else if(tempSum > target){
                end --;
            } else {
                return ans;
            }
            
        }
    }
    
    return ans;
}

/// 面试题11. 旋转数组的最小数字
/// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
/// @param array array
- (NSInteger)mainArray:(NSArray *)numbers {
    // Swift解法
//    var i:Int = 0;
//    var j:Int = numbers.count - 1;
//    while (i < j) {
//        var m:Int = (i + j) / 2;
//        if (numbers[m] > numbers[j]) {
//            i = m + 1;
//        } else if (numbers[m] < numbers[j]) {
//            j = m;
//        } else {
//            j = j - 1
//        };
//    }
//    return numbers[i];
    return 10;
}

/// 面试题24. 反转链表
/// https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
/// @param header ListNode
- (ListNode *)reverseList:(ListNode *)header {
    // swift解法
    //    var newHead:ListNode?  = nil
    //    while(head != nil){
    //       var temp:ListNode = head!.next
    //       head.next = newHead
    //        newHead = head
    //        head = temp
    //    }
    //    return newHead;
    return [[ListNode alloc] init];
}

/// 面试题18. 删除链表的节点
/// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
/// @param head ListNode
/// @param val NSString
- (ListNode *)deleteNode:(ListNode *)head deleStr:(NSString *)val {
    //java解法
    //    ListNode firstNode = new ListNode(-1);
    //    firstNode.next = head;
    //    ListNode curr = firstNode;
    //    while(curr!=null && curr.next != null){
    //        if(curr.next.val == val){
    //            curr.next = curr.next.next;
    //        }
    //        curr = curr.next;
    //    }
    //    return firstNode.next;
    return [[ListNode alloc] init];
}

/// 19.删除链表的倒数第N个节点
/// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
/// @param node <#node description#>
/// @param n <#n description#>
- (ListNode *)removeNthFromEnd:(ListNode *)node nth:(NSInteger)n {
    //   java
    //    ListNode pre = new ListNode(0);
    //    pre.next = head;
    //    ListNode start = pre, end = pre;
    //    while(n != 0) {
    //        start = start.next;
    //        n--;
    //    }
    //    while(start.next != null) {
    //        start = start.next;
    //        end = end.next;
    //    }
    //    end.next = end.next.next;
    //    return pre.next;
    return [[ListNode alloc] init];
}

/// 面试题22. 链表中倒数第k个节点
/// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
/// @param node <#node description#>
/// @param k <#k description#>
- (ListNode *)getKthFromEnd:(ListNode *)node nth:(NSInteger)k {
    // java解法
    //    ListNode former = head, latter = head;
    //    while(k>0){
    //        former = former.next;
    //        k--;
    //    }
    //    while(former != null) {
    //        former = former.next;
    //        latter = latter.next;
    //    }
    //    return latter;
    return [[ListNode alloc] init];
}

/// 61. 旋转链表
/// https://leetcode-cn.com/problems/rotate-list/
/// @param node <#node description#>
/// @param k <#k description#>
/// 同样都是通过快慢指针实现
/**
 *1：先获取整个链表数量，把k和链表长度取余
 *2：申请两个指针，first，scond
 *3：先让快指针先挪动k个节点
 *4：在同步移动两个节点，一直到first节点指向链表尾部
 *5：这时，second的next节点就是先链表的heade节点，也就要在second的next节点断开
 *6：把尾节点的next节点指向头部，
 *7：把head指向seconde.next节点
 *8：把second.next打断职位null
 */
- (ListNode *)rotateRight:(ListNode *)node nth:(NSInteger)k {
    //    if (head == null) return null;
    //    int n=0;
    //    ListNode tempNode = head;
    //    while(tempNode != null){
    //        tempNode = tempNode.next;
    //        n++;
    //    }
    //    k%=n;
    //    ListNode first=head,second=head;
    //    while(k>0){
    //        first=first.next;
    //        k--;
    //    }
    //    while(first.next != null){
    //        first=first.next;
    //        second=second.next;
    //    }
    //    first.next=head;
    //    head=second.next;
    //    second.next=null;
    //    return head;
    return [[ListNode alloc] init];
}

@end
