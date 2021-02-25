//
//  TestManagerr.m
//  TestSort1
//
//  Created by ZZG on 2020/12/23.
//  Copyright © 2020 Arthur. All rights reserved.
//

#import "TestManagerr.h"

@implementation TestManagerr

+(instancetype)shareManager {
    static TestManagerr  * manager = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        manager = [[TestManagerr alloc] init];
    });
    return manager;
}


@end
