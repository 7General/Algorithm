//
//  Car.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/12/17.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "Car.h"

@implementation Car


- (void)run {
    // 测试2
    [super run];
    // 测试1
    NSLog(@"car:%@ %@ %@ %@",[self class], [self superclass], [super class], [super superclass]);
//    [self testIsKindOfClass:[self class]];
    Person * ps = [[Person alloc] init];
  Class c1 =  [ps class];
   Class c2 = [Person class];
    BOOL a = [ps isKindOfClass:[Person class]];
    BOOL b = [[self class] isKindOfClass:[Car class]];
    NSLog(@"-----:%ld---%ld",a,b);// 判断对象是否为class的实例或者子类
    NSLog(@"-----:%p---%p",c1,c2);
    
    //isMemberOfClass则是判断对象是否为Class的实例
    //isKindOfClass则是判断对象是否为class的实例或者子类
}

@end
