//
//  MaxAreaObject.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/7/18.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "MaxAreaObject.h"

@implementation MaxAreaObject

- (void)maxArea {
    NSArray * dataSource = @[@"1",@"8",@"6",@"2",@"5",@"4",@"8",@"3",@"7"];
    NSInteger maxArea = 0;
    for (NSInteger index = 0; index < dataSource.count; index++) {
        for (NSInteger secIndex = index + 1; secIndex < dataSource.count; secIndex++) {
            NSInteger minValue = MIN([dataSource[index] integerValue], [dataSource[secIndex] integerValue]) * (secIndex - index);
            maxArea = MAX(maxArea, minValue);
//            NSLog(@"%ld-->%ld====%ld-->%ld--=-==-=:%ld",index,[dataSource[index] integerValue],secIndex,[dataSource[secIndex] integerValue], maxArea);
        }
    }
    NSLog(@"最大区域:%ld",maxArea);
}


@end
