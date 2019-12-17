//
//  SUMString.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/9/9.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "SUMString.h"

@implementation SUMString

- (NSString *)sumString:(NSString *)num1 sum2String:(NSString *)num2 {
    if ([@"0" isEqualToString:num1] || [@"0" isEqualToString:num2]) return @"0";
    if ([@"1" isEqualToString:num1]) return num2;
    if ([@"1" isEqualToString:num2]) return num1;
    
    NSInteger num1Length = num1.length;
    NSInteger num2Length = num2.length;
    
    NSMutableArray * products = [NSMutableArray arrayWithCapacity:num1Length + num2Length];
    for (NSInteger index = num1Length - 1; index >= 0; index--) {
        NSMutableArray * countArray = [NSMutableArray array];
        NSInteger countIndex = 0;
        for (NSInteger index2 = num2Length - 1; index2 >= 0; index2--) {
            NSString * num1Str = [NSString stringWithFormat:@"%c",[num1 characterAtIndex:index]];
            NSString * num2Str = [NSString stringWithFormat:@"%c",[num2 characterAtIndex:index2]];
            NSInteger values = [num2Str integerValue] * [num1Str integerValue];
            
            NSString *resoultString = [self appendZero:countIndex withString:[NSString stringWithFormat:@"%ld",values]];
            [countArray addObject:resoultString];
            if (0 == index2) {
                NSInteger countResoult = 0;
                for (NSString * strs in countArray) {
                    countResoult = countResoult + ([strs integerValue]);
                }
                if (countResoult > 0) {
                    NSString * values = [NSString stringWithFormat:@"%ld",countResoult];
                    [products addObject:values];
                }
            }
            countIndex++;
        }
    }
    
    NSInteger resoult = 0;
    for (NSInteger index = 0; index < products.count; index++) {
        NSString *resoultString = [self appendZero:index withString:products[index]];
        resoult = resoult + [resoultString integerValue];
    }
    
    return [NSString stringWithFormat:@"%ld",resoult];
}

- (NSString *)appendZero:(NSInteger)indexCount withString:(NSString *)string {
    if (0 == indexCount) return string;
    NSMutableString * mutableString = [[NSMutableString alloc] initWithString:string];
    for (NSInteger index = 1; index <= indexCount; index++) {
        [mutableString appendString:@"0"];
    }
    return mutableString;
}

- (NSString *)sumstring:(NSString *)num1 num2:(NSString *)num2 {
    if ([@"0" isEqualToString:num1] || [@"0" isEqualToString:num2]) return @"0";
    if ([@"1" isEqualToString:num1]) return num2;
    if ([@"1" isEqualToString:num2]) return num1;
    
    NSInteger num1Length = num1.length;
    NSInteger num2Length = num2.length;
    
    NSMutableArray * products = [NSMutableArray arrayWithCapacity:num1Length + num2Length];
    NSMutableDictionary * productsDictionary = [NSMutableDictionary dictionaryWithCapacity:num1Length + num2Length];
    for (NSInteger index = 0; index < num1Length; index++) {
        for (NSInteger index2 = 0; index2 < num2Length; index2++) {
            NSString * num1Str = [NSString stringWithFormat:@"%c",[num1 characterAtIndex:num1Length - 1 - index]];
            NSString * num2Str = [NSString stringWithFormat:@"%c",[num2 characterAtIndex:num2Length - 1 - index2]];
            
            NSInteger resoult = [num1Str integerValue] * [num2Str integerValue];
            
            NSString * selectIndex = [NSString stringWithFormat:@"%ld",index + index2];
            NSInteger sameIndexValue = [[productsDictionary objectForKey:selectIndex] integerValue];
            [productsDictionary setValue:@(resoult + sameIndexValue) forKey:selectIndex];
        }
    }
    NSArray * keys = productsDictionary.allKeys;
    keys = [keys sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
        return [obj1 compare:obj2 options:NSCaseInsensitiveSearch];
    }];
    for (NSString * key in keys) {
        NSInteger itemValue = [[productsDictionary objectForKey:key] integerValue];
        [products addObject:@(itemValue)];
    }
    NSInteger carrys = 0;
    // 两数相乘的结果遍历
    for (NSInteger index = 0; index < products.count; index++) {
        NSInteger itemValue = [products[index]  integerValue];
        itemValue = itemValue + carrys;
        carrys = itemValue / 10;
        itemValue = itemValue % 10;
        products[index] = @(itemValue);
    }
    
    if (0 != carrys) {
        [products addObject:@(carrys)];
    }
    // 翻转数组获取结果
    NSMutableString * resoultString = [NSMutableString string];
    for (NSInteger index = products.count - 1; index >= 0; index--) {
        NSString * itemValue = [products[index] stringValue];
        [resoultString appendString:itemValue];
    }
    
    return resoultString;
}

@end

