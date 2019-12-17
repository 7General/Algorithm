//
//  StrToStr.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/12/3.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "StrToStr.h"

@implementation StrToStr

//- (NSInteger)strStr:(NSString *)haySrack forNeedle:(NSString *)needle {
//    NSInteger startIndex = -1;
//    if (0 == needle.length) {
//        startIndex = 0;
//    } else if (needle.length < haySrack.length) {
//        for (NSInteger nIndex = 0; nIndex < needle.length; nIndex++) {
//            NSString * needStr = [NSString stringWithFormat:@"%c",[needle characterAtIndex:nIndex]];
//
//            for (NSInteger index = 0; index < haySrack.length; index++) {
//                NSString * num1Str = [NSString stringWithFormat:@"%c",[haySrack characterAtIndex:index]];
//                if ([needStr isEqualToString:num1Str]) {
//                    startIndex = index;
//                    break;
//                }
//            }
//            if (-1 != startIndex) {
//                break;
//            }
//        }
//    } else if(needle.length == haySrack.length){
//        return 0;
//    }
//
//    return startIndex;
//}

- (NSInteger)strStr:(NSString *)haySrack forNeedle:(NSString *)needle {
    if ([needle isEqualToString:@""] || 0 == needle.length) {
        return 0;
    }
    for (NSInteger index = 0; index < haySrack.length; index++) {
        
        if (haySrack.length - index < needle.length) {
            return -1;
        }
        NSString * haySrackStr = [NSString stringWithFormat:@"%c",[haySrack characterAtIndex:index]];
        NSString * needleStr = [NSString stringWithFormat:@"%c",[needle characterAtIndex:0]];
        
        if ([haySrackStr isEqualToString:needleStr]) {
            BOOL flag = YES;
            for (NSInteger j = 0; j < needle.length; j++) {
                NSString * temphaySrackStr = [NSString stringWithFormat:@"%c",[haySrack characterAtIndex:(index + j)]];
                NSString * tempneedleStr = [NSString stringWithFormat:@"%c",[needle characterAtIndex:(j)]];
                if (![tempneedleStr isEqualToString:temphaySrackStr]) {
                    flag = false;
                }
            }
            if (flag) {
                return index;
            }
        }
    }
    
    return -1;
}

@end

