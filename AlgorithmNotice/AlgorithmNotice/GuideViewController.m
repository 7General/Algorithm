//
//  GuideViewController.m
//  AlgorithmNotice
//
//  Created by zzg on 2020/1/7.
//  Copyright © 2020 zzg. All rights reserved.
//

#import "GuideViewController.h"

@interface GuideViewController ()

@end

@implementation GuideViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    
    
    self.view.backgroundColor = [UIColor yellowColor];
    
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        if (self.removeClickHandler) {
            self.removeClickHandler();
        }
    });
}

- (void)setRemoveClickHandler:(removeClickBlock _Nonnull)removeClickHandler {
    _removeClickHandler = [removeClickHandler copy];
}

@end
