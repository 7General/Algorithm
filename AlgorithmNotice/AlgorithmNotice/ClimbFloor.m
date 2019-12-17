//
//  ClimbFloor.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/7/30.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "ClimbFloor.h"

@implementation ClimbFloor

- (NSInteger)climbStairs:(NSInteger)stairs {
    if (stairs <= 2) {
        return stairs;
    } else {
        return [self climbStairs:stairs - 1] + [self climbStairs:stairs - 2];
    }
}

@end
