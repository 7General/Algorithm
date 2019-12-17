//
//  RomanToInt.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/10/21.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "RomanToInt.h"

@implementation RomanToInt

/*
 func romanToInt(_ s: String) -> Int {
 var str = s
 var num = 0
 
 let nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
 let romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
 var i = 0
 while str.count > 0 {
 let roman = romans[i]
 // 此处虽然有一个while循环，但是romans是固定的，不随n的变化而变化，所以时间复杂度依然是O(n)
 while str.hasPrefix(roman) {
 str.remove(at: str.startIndex)
 if roman.count == 2 {
 str.remove(at: str.startIndex)
 }
 num += nums[i]
 }
 i += 1
 }
 return num
 }
 
 romanMap.put('M', 1000);
 
 int res = 0;
 for (int i = 0; i < s.length(); i++) {
 int curVal = romanMap.get(s.charAt(i));
 int nexVal = i < s.length() - 1 ? romanMap.get(s.charAt(i + 1)) : 0;
 res += curVal < nexVal ? - curVal : curVal;
 }
 return res;
 }
 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 
 */
- (NSInteger)romanToInt:(NSString *)str {
    NSMutableString * resultStr = [[NSMutableString alloc] initWithString:str];

    NSDictionary * maps = @{@"M":@(1000),@"D":@(500),@"C":@(100),@"L":@(50),@"X":@(10),@"V":@(5),@"I":@(1)};
    NSInteger res = 0;
    NSInteger nexVal = 0;
    for (NSInteger index = 0; index < resultStr.length; index++) {
        NSString * currentStr = [NSString stringWithFormat:@"%c",[resultStr characterAtIndex:index]];
        NSInteger curVal = [[maps objectForKey:currentStr] integerValue];
        
        if (index + 1 < resultStr.length) {
            NSString * nextStr = [NSString stringWithFormat:@"%c",[resultStr characterAtIndex:index + 1]];
            nexVal =  [[maps objectForKey:nextStr] integerValue];
        }
        res += (curVal < nexVal) ? - curVal : curVal;
    }
    return res;
}

@end
