//
//  ProfessionalNotice.h
//  AlgorithmNotice
//
//  Created by zzg on 2020/3/19.
//  Copyright © 2020 zzg. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN


@interface ListNode : NSObject

@property (nonatomic, strong) NSString * val;
@property (nonatomic, strong) ListNode * next;

@end

@interface ProfessionalNotice : NSObject

/**
 344. 反转字符串

 @param input <#input description#>
 @return <#return value description#>
 */
- (NSString *)reverseString:(NSString *)input;


/**
 面试题03. 数组中重复的数字

 @param nums <#nums description#>
 @return <#return value description#>
 */
- (NSInteger)findRepeatNumber:(NSArray *)nums;

/// 三数之和
/// @param nums <#nums description#>
/// @param target <#target description#>
- (NSInteger)threeSumClosest:(NSArray<NSNumber *> *)nums target:(NSInteger)target;

/// 面试题11. 旋转数组的最小数字
/// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
/// @param array array
- (NSInteger)mainArray:(NSArray *)array;

/// 面试题24. 反转链表
/// https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
/// @param header ListNode
- (ListNode *)reverseList:(ListNode *)header;

/// 面试题18. 删除链表的节点
/// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
/// @param head ListNode
/// @param val NSString
- (ListNode *)deleteNode:(ListNode *)head deleStr:(NSString *)val;

/// 19.删除链表的倒数第N个节点
/// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
/// @param node <#node description#>
/// @param n <#n description#>
- (ListNode *)removeNthFromEnd:(ListNode *)node nth:(NSInteger)n;

/// 面试题22. 链表中倒数第k个节点
/// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
/// @param node <#node description#>
/// @param k <#k description#>
- (ListNode *)getKthFromEnd:(ListNode *)node nth:(NSInteger)k;


/// 61. 旋转链表
/// https://leetcode-cn.com/problems/rotate-list/
/// @param node <#node description#>
/// @param k <#k description#>
- (ListNode *)rotateRight:(ListNode *)node nth:(NSInteger)k;

@end

NS_ASSUME_NONNULL_END
