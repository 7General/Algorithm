//
//  GuideViewController.h
//  AlgorithmNotice
//
//  Created by zzg on 2020/1/7.
//  Copyright © 2020 zzg. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

typedef void(^removeClickBlock)(void);
@interface GuideViewController : UIViewController

@property (nonatomic, copy) removeClickBlock  removeClickHandler;
- (void)setRemoveClickHandler:(removeClickBlock _Nonnull)removeClickHandler;

- (void)setNeedGuideViewController;

@end

NS_ASSUME_NONNULL_END
