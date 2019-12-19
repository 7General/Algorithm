//
//  ViewController.swift
//  Algorithm
//
//  Created by zzg on 2019/9/18.
//  Copyright © 2019 zzg. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let twos = twoSum([3,2,4], 6);
        print("twos---",twos);
        
        
        let isReverNumber = isPalindrome(0);
        print("reverNumber---",isReverNumber);
        
        
        let rElement = removeElement([3,2,2,3], 3);
        print("rElement----",rElement);
        
        var nums:[Int] = [2,2,2,3,5];
        let rduplit = removeDuplicates(&nums)
        print(" rDupipt-----",rduplit,nums)
        
        
        let strings = "china";
        print("start",strings[strings.startIndex]);
        //        print("end",strings[strings.endIndex]);
        //        character[character.index(before: character.endIndex)]
        let endStr = strings[strings.index(before: strings.endIndex)];
        print(endStr);
        
    
//        romanToInt("VIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
        
        
      let strIndex = strStr("abcd", "bc");
        print("indexOf:",strIndex);
        
        
        
        
        var restStr = "abcdefg";
//        var rs = restStr.index(restStr.startIndex, offsetBy: 2);
        print("rs-->",restStr[restStr.index(restStr.startIndex, offsetBy: 2)]);
        
        
        
        
       var climb = climbStairs(3);
        print("climb--->",climb);
        
        
        // 合并数组
        var me1:[Int] = [2,3,5];
        merge(&me1, 3, [2,3,4,7,9], 5);
    
    }
    
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        let count = nums.count
        var resoultDictionary:Dictionary<Int, Int> = [Int:Int]();
        for index in 0..<count {
            let res = target - nums[index];
            
            if(resoultDictionary.keys.contains(res)) {
                return [(resoultDictionary[(res)] ?? 0),index];
            }
            resoultDictionary.updateValue(index, forKey: nums[index])
        }
        return [];
    }
    
    func reverse(_ x: Int) -> Int {
        var inputString = x;
        
        let maxValue:Int = 2147483647;
        let minValue:Int = -2147483648;
        
        var ans:Int = 0;
        while 0 != inputString {
            let pop:Int = inputString % 10;
            inputString = inputString / 10;
            ans = ans * 10 + pop;
            if (ans > maxValue || (ans == maxValue / 10 && pop > 7)) {return 0}
            if (ans < minValue || (ans == minValue / 10 && pop < -8)) {return 0}
        }
        return ans;
    }
    
    func isPalindrome(_ x: Int) -> Bool {
        var numbers:Int = x;
        
        if (numbers < 0 || (numbers % 10 == 0 && numbers != 0)) {
            return false;
        }
        var reverNumber:Int = 0;
        while (numbers > reverNumber) {
            reverNumber = reverNumber * 10 + numbers % 10;
            numbers =  numbers / 10;
        }
        return numbers == reverNumber || numbers == reverNumber/10;
    }
    
    func removeElement(_ nums: [Int], _ val: Int) -> Int {
        if (nums.count == 0) { return 0 }
        var varNums = nums;
        var i = 0
        for j in 0..<varNums.count {
            if varNums[j] != val{
                varNums[i] = varNums[j]
                i += 1
            }
        }
        print(varNums);
        return i
    }
    
    
    //    func removeDuplicates(_ nums: [Int]) -> Int {
    //        var index:Int = 0;
    //        var numsTemp = nums;
    //        for ins in 0..<numsTemp.count {
    //            if numsTemp[index] != numsTemp[ins] {
    //                index = index + 1;
    //                numsTemp[index] = numsTemp[ins];
    //            }
    //        }
    //        return index;
    //    }
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        if nums.count == 0 || nums.count == 1 {
            return nums.count
        }
        var size = 0
        for i in 0..<nums.count {
            if nums[i] != nums[size] {
                size += 1
                nums[size] = nums[i]
            }
        }
        
        return size + 1
    }
    
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
    
    
    /*
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
     */
    
    
    func strStr(_ haystack: String, _ needle: String) -> Int {
        var result = -1
        
        if needle.count == 0 {
            result = 0
        }else if needle.count < haystack.count{
            for i in 0..<haystack.count-needle.count+1 {
                let currentStr = haystack[haystack.index(haystack.startIndex, offsetBy: i)..<haystack.index(haystack.startIndex, offsetBy: i+needle.count)]
                if currentStr == needle {
                    result = i
                    break
                }
            }
        }else if needle.count == haystack.count {
            if needle == haystack {
                result = 0
            }
        }
        return result
    }
    
    func climbStairs(_ n: Int) -> Int {
        if n==1 {
            return 1
        }
        
        var dp : [Int] = [Int].init(repeating: 0, count: n+1)
        dp[1] = 1
        dp[2] = 2
        var i = 3
        while i<=n {
            dp[i] = dp[i-1]+dp[i-2]
            i += 1
        }
        return dp[n]
    }
    
    func merge(_ nums1: inout [Int], _ m: Int, _ nums2: [Int], _ n: Int) {
        var num1Index = m;
        var num2Index = n;
        
        var resoultArray :[Int] = [Int].init(repeating: 0, count: m+n-1);
        
//        for nindex in 0..<nums2.count {
//            nums1[mIndex] = nums2[nindex];
////            mIndex += 1;
//            print(nums1[mIndex]);
//            mIndex = mIndex + 1;
//        }
//        nums1.sort();
//        print(nums1);
    }
    
    
    
}




