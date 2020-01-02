//
//  detectCapitalUse.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/12/31.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "detectCapitalUse.h"

@implementation detectCapitalUse

- (BOOL)detectCapitalUse:(NSString *)string {
    if ([string isEqualToString:[string lowercaseString]]) {
        return YES;
    }
    if ([string isEqualToString:[string uppercaseString]]) {
        return YES;
    }
    NSString * startString = [NSString stringWithFormat:@"%c",[string characterAtIndex:0]];
    for (NSInteger index = 1; index < string.length - 1; index++) {
        NSString * startIndexString = [NSString stringWithFormat:@"%c",[string characterAtIndex:index]];
        if ([startString isEqualToString:[startString uppercaseString]] && [startIndexString isEqualToString:[startIndexString lowercaseString]]) {
            
        } else {
            return NO;
        }
    }
    return YES;
}

@end
