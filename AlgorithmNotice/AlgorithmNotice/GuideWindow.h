//
//  GuideWindow.h
//  AlgorithmNotice
//
//  Created by zzg on 2020/1/3.
//  Copyright © 2020 zzg. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN


typedef void(^RemoveBlock)(void);
@interface GuideWindow : UIWindow

- (instancetype)initWithFrame:(CGRect)frame removeBlock:(RemoveBlock)removeBlock;

@end

NS_ASSUME_NONNULL_END
