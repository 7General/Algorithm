//
//  singleNumber.m
//  AlgorithmNotice
//
//  Created by zzg on 2020/1/11.
//  Copyright © 2020 zzg. All rights reserved.
//

#import "singleNumber.h"

@implementation singleNumber

- (NSString *)singleNumber:(NSArray *)nums {
    NSInteger ans = 0;
    for (NSString * item in nums) {
        NSInteger temp = [item integerValue];
        ans = ans ^ temp;
    }
    return [NSString stringWithFormat:@"%ld",ans];
    
//    NSMutableArray * muArray = [[NSMutableArray alloc] initWithArray:nums];
    NSString * res = @"";
    for (NSString * item in nums) {
        NSInteger resins = [self removeDumpl:item nums:nums];
        if (1 == resins) {
            res = item;
        }
    }
    return res;
    
}


- (NSInteger)removeDumpl:(NSString *)item nums:(NSArray *)array {
    NSInteger resInter = 0;
    for (NSString * items in array) {
        if ([item isEqualToString:items]) {
            resInter = resInter + 1;
        }
    }
    return resInter;
}

@end
