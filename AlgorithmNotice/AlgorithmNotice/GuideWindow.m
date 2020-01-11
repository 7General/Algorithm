//
//  GuideWindow.m
//  AlgorithmNotice
//
//  Created by zzg on 2020/1/3.
//  Copyright © 2020 zzg. All rights reserved.
//

#import "GuideWindow.h"
#import "GuideView.h"

@interface GuideWindow()
@property (nonatomic,copy) RemoveBlock removeBlock;

@property (nonatomic, strong) GuideView * guideView;
@end


@implementation GuideWindow

- (instancetype)initWithFrame:(CGRect)frame
                  removeBlock:(RemoveBlock)removeBlock
{
    self = [super initWithFrame:frame];
    if (!self) {
        return nil;
    }
    self.removeBlock = removeBlock;
    
    [self initDefaultConfiguration];
    [self setupViews];
    
    
    
    
    
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(4 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        if (self.removeBlock) {
            self.removeBlock();
        }
    });
    return self;
}

- (void)initDefaultConfiguration {
    self.backgroundColor = [UIColor clearColor];
    self.windowLevel = UIWindowLevelNormal + 1;
    UIViewController *vc = [UIViewController new];
    vc.view.hidden = YES;
    self.rootViewController = vc;
    self.hidden = NO;
}

- (void)setupViews {
    
    self.guideView = [[GuideView alloc] initWithFrame:[UIScreen mainScreen].bounds];
    [self addSubview:self.guideView];
     
    
}



@end
