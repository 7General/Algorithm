//
//  rotateArray.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/12/30.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "rotateArray.h"

@implementation rotateArray

- (void)roateArray:(NSArray *)array roateNext:(NSInteger)k {
    if (0 == array.count) return;
    NSInteger arrayCount = array.count;
    NSMutableArray * tempArray = [[NSMutableArray alloc] initWithArray:array];
    for (NSInteger index = 0; index < array.count; index++) {
        tempArray[((index + k) % arrayCount)] = array[index];
    }
    NSLog(@"---tempArray:%@",tempArray);
}

@end
