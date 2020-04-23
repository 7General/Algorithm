//
//  ViewController.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/6/5.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "ViewController.h"
#import "MaxAreaObject.h"
#import "ClimbFloor.h"
#import "SUMString.h"
#import "IntegerInversion.h"
#import "twoSum.h"
#import "Palindrome.h"
#import "RemoveElement.h"
#import "RemoveDuplicates.h"
#import "RomanToInt.h"
#import "StrToStr.h"
#import "Car.h"
#import "MergeArray.h"
#import "PalindromeString.h"
#import "rotateArray.h"
#import "detectCapitalUse.h"
#import "singleNumber.h"
#import "ProfessionalNotice.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    
    MaxAreaObject * maxObject = [[MaxAreaObject alloc] init];
    [maxObject maxArea];
    
    // 爬楼梯
    ClimbFloor * climb = [[ClimbFloor alloc] init];
    NSInteger climStairs = [climb climbStairs:4];
    NSLog(@"爬楼梯----%ld",climStairs);
    
    
    SUMString * sumString = [[SUMString alloc] init];
//    NSString * resoultString = [sumString sumString:@"2" sum2String:@"23"];
//    NSLog(@"结果：%@,长度：%ld",resoultString,resoultString.length);
   NSString * res = [sumString sumstring:@"33" num2:@"45"];
    NSLog(@"--:%@",res);
    
    
    IntegerInversion * sums = [[IntegerInversion alloc] init];
    NSLog(@"---string:%@",[sums Integerinversion:4611686018427387904]);
    NSLog(@"---string:%ld",[sums reverse:4611686018427387904]);
    
    twoSum * twos = [[twoSum alloc] init];
    [twos twoSum];
    
    
    Palindrome * rome = [[Palindrome alloc] init];
    BOOL resome = [rome isPalindrome:12321];
    NSLog(@"---rome:%d",resome);
    
    RemoveElement * rElement = [[RemoveElement alloc] init];
    NSMutableArray * nums = @[@(3),@(2),@(2),@(3),@(5)].mutableCopy;
    NSInteger reIndex = [rElement removeElement:nums target:3];
    NSLog(@"rElement-index:%ld-------nums:%@",(long)reIndex,nums);
    
    RemoveDuplicates * rDupli = [[RemoveDuplicates alloc] init];
    NSMutableArray * dupli = @[@"3",@"2",@"2",@"5"].mutableCopy;
    NSInteger tlength = [rDupli removeDuplicates:dupli];
    NSLog(@"----rDupli:%ld---dupli:%@",tlength,dupli);

    
    RomanToInt *roman = [[RomanToInt alloc] init];
    NSInteger romanRes = [roman romanToInt:@"CD"];
    NSLog(@"---res:%ld",romanRes);
    
    // indexofstr
    StrToStr * strStr = [[StrToStr alloc] init];
    NSInteger startIndex = [strStr strStr:@"bca" forNeedle:@"ca"];
    NSLog(@"---->%ld",startIndex);
    
    Car * car = [[Car alloc] init];
    [car run];
    
    MergeArray * merage = [[MergeArray alloc] init];
    NSArray * resArray = [merage merageArray:@[@"1",@"2",@"3",@"4",@"5"] count:4 nums2:@[@"3",@"4",@"5",@"6"] num2Count:4];
    NSLog(@"----resArray:%@",resArray);
    
    
    PalindromeString * dromStr = [[PalindromeString alloc] init];
    BOOL dromres = [dromStr isPalindrome:@"AmanaplanacanalPanama"];
    NSLog(@"====dromres:%d",dromres);
    
    rotateArray * roate = [[rotateArray alloc] init];
    [roate roateArray:@[@"1",@"2",@"3",@"4",@"5",@"6",@"7"] roateNext:3];
    
    detectCapitalUse * detect = [[detectCapitalUse alloc] init];
    BOOL detectB = [detect detectCapitalUse:@"wWang"];
    NSLog(@"--detectCapitalUse:%d",detectB);
    
    singleNumber * stringNum = [[singleNumber alloc] init];
    NSString * resString = [stringNum singleNumber:@[@"4",@"4",@"5",@"5",@"2"]];
    NSLog(@"=====出现一次的数字:%@",resString);
    
    ProfessionalNotice * notice = [[ProfessionalNotice alloc] init];
    NSString * reverStr = [notice reverseString:@"wang"];
    NSLog(@"=====:%@",reverStr);
    
    
    [notice findRepeatNumber:@[@"2",@"2",@"4",@"4",@"3"]];
    
   NSInteger ans = [notice threeSumClosest:@[@(1),@(2),@(3),@(4),@(5)] target:7];
    NSLog(@"=====:%d",ans);
    
    
    
    
//    NSString * copyStr = @"123";
//    NSString * copy1Str = [copyStr copy];
//    copyStr = @"456";
//    NSLog(@"----copyStr:%@",copy1Str);
//
//    NSMutableArray * msArray = [[NSMutableArray alloc] init];
//    [msArray addObject:@"1"];
//    NSLog(@"---1:%@",msArray);
//
//
//    [msArray addObject:@"2"];
//    NSLog(@"---msArray：2.1:%@",msArray);
//    NSMutableArray * copyArray = [msArray copy];
//    [msArray addObject:@"2.1"];
//    NSLog(@"---copyArray:2.2:%@",copyArray);
//
//
//    [msArray addObject:@"3"];
//    NSLog(@"---msArray:3.1:%@",msArray);
//    NSMutableArray * muArray = [msArray mutableCopy];
//    [msArray removeAllObjects];
//    NSLog(@"---muArray:3.2:%@",muArray);
    
    NSArray *array0 = @[@"a",@"b",@"c"];
    
    NSArray *array1 = [array0 mutableCopy];
    NSLog(@"array0:%@-----array1:%@",array0,array1);
    array0 = @[@"1",@"2",@"3"];
    NSLog(@"array1:%@",array1);
    
    
    NSInteger  resssss =  6 % 5;
    NSLog(@"---:%ld",resssss);
    
    
    

    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(testClick) name:@"testnotifi" object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(testClickgo) name:@"testnotifigo" object:nil];
}
- (void)btnClick {
    NSLog(@"22222");
}

- (void)testClick {
    for (NSInteger index = 0; index < 20; index++) {
        sleep(1);
        NSLog(@"--%d",index);
    }
}

- (void)testClickgo {
    NSLog(@"-------testClickgotestClickgotestClickgo");
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    
    [[NSNotificationCenter defaultCenter] postNotificationName:@"testnotifi" object:nil];

    [[NSNotificationCenter defaultCenter] postNotificationName:@"testnotifigo" object:nil];
}


@end
