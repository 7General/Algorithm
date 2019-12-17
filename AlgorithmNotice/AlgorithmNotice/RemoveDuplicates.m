//
//  RemoveDuplicates.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/10/16.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "RemoveDuplicates.h"

@implementation RemoveDuplicates

// 3 2 2 5
- (NSInteger)removeDuplicates:(NSMutableArray *)nums {
    NSInteger index = 0;
    for (NSInteger ins = 0; ins < nums.count; ins++) {
        if (nums[index] != nums[ins]) {
            index++;
            NSLog(@"---->>>%ld",index);
            nums[index] = nums[ins];
        }
    }
    return index + 1;
}


@end
