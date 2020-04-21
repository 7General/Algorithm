//
//  ProfessionalNotice.h
//  AlgorithmNotice
//
//  Created by zzg on 2020/3/19.
//  Copyright © 2020 zzg. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

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

- (NSInteger)threeSumClosest:(NSArray<NSNumber *> *)nums target:(NSInteger)target;
@end

NS_ASSUME_NONNULL_END
