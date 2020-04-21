//
//  ProfessionalNotice.m
//  AlgorithmNotice
//
//  Created by zzg on 2020/3/19.
//  Copyright © 2020 zzg. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ProfessionalNotice.h"

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

@end
