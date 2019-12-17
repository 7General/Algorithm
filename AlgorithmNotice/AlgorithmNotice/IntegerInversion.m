//
//  IntegerInversion.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/9/17.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "IntegerInversion.h"

@implementation IntegerInversion

- (NSString *)Integerinversion:(NSInteger)integr {
    if (integr <= 0) return @"";

    NSMutableArray * array = [NSMutableArray array];
    while (0 != integr) {
        NSInteger injury = integr / 10;
        if (injury) {
            NSInteger res = integr % 10;
            integr = injury;
            [array addObject:@(res)];
        }
        if (0 == injury && integr >= 1) {
            [array addObject:@(integr)];
            integr = injury;
        }
    }
    NSMutableString * resString = [[NSMutableString alloc] init];
    for (NSInteger index = 0; index < array.count; index++) {
        [resString appendString:[array[index] stringValue]];
    }
    return resString;
}


- (NSInteger)reverse:(NSInteger)integr {
    if (integr <= 0) return 0;
    NSInteger ans = 0;
    while (0 != integr) {
        NSInteger pop = integr % 10;
        integr = integr / 10;
        
        ans = ans * 10 + pop;
        
        if (ans > NSIntegerMax / 10 || (ans == NSIntegerMax / 10 && pop > 7)) return 0;
        if (ans < NSIntegerMin / 10 || (ans == NSIntegerMin / 10 && pop < -8)) return 0;
    }
    return ans;
}


@end
