//
//  twoSum.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/9/18.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "twoSum.h"

@implementation twoSum

- (void)twoSum {
    NSArray * nums = @[@"3", @"2", @"4"];
    NSInteger target = 6;
    NSMutableDictionary * dictionary = [NSMutableDictionary dictionary];
    for (NSInteger index = 0; index < nums.count; index++) {
        NSInteger tempKeys = target - [nums[index] integerValue];
        if([dictionary.allKeys containsObject:[NSString stringWithFormat:@"%ld",tempKeys]]) {
            NSLog(@"---currentIndex:%ld,----fromindex:%@",index,dictionary[[NSString stringWithFormat:@"%ld",tempKeys]]);
        }
        [dictionary setValue:@(index) forKey:nums[index]];
    }
}

@end
