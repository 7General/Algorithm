//
//  PalindromeString.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/12/27.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "PalindromeString.h"

@implementation PalindromeString

- (BOOL)isPalindrome:(NSString *)dromeString {
    if (0 == dromeString.length) return YES;
    NSString * inputString = [dromeString lowercaseString];
    BOOL res = YES;
    for (NSInteger index = 0; index < inputString.length; index++) {
        NSString * startString = [NSString stringWithFormat:@"%c",[inputString characterAtIndex:index]];
        NSString * endString = [NSString stringWithFormat:@"%c",[inputString characterAtIndex:inputString.length - 1 - index]];
        if (![startString isEqualToString:endString]) {
            res = NO;
        }
    }
    return res;
}

@end
