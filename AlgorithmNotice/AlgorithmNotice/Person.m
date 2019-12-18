//
//  Person.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/12/17.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "Person.h"

@implementation Person

- (void)run {
    NSLog(@"person:%@ %@ %@ %@",[self class], [self superclass], [super class], [super superclass]);
}
@end
