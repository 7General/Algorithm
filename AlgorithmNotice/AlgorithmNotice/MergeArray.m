//
//  MergeArray.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/12/18.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "MergeArray.h"

@implementation MergeArray

- (NSArray *)merageArray:(NSArray *)nums1 count:(NSInteger)m nums2:(NSArray *)nums2 num2Count:(NSInteger)n {
    NSMutableArray * tempNums1 = [[NSMutableArray alloc] initWithArray:nums1];
    for (NSInteger index = 0; index < nums2.count; index++) {
        tempNums1[m] = nums2[index];
        m++;
    }
    [tempNums1 sortUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
        NSInteger objc1 = [obj1 integerValue];
        NSInteger objc2 = [obj2 integerValue];
        return objc1 > objc2;
    }];

    return [tempNums1 copy];
}

@end
