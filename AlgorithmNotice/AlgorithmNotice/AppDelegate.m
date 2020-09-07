//
//  AppDelegate.m
//  AlgorithmNotice
//
//  Created by zzg on 2019/6/5.
//  Copyright © 2019 zzg. All rights reserved.
//

#import "AppDelegate.h"
#import "GuideWindow.h"
#import "GuideViewController.h"
#import "GuideRootViewController.h"

@interface AppDelegate ()

@property (nonatomic, strong) GuideWindow * guideWindow;

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // 白日依山尽
    // 黄河入海流
    // 欲穷千里目
//    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
//    [self.window setBackgroundColor:[UIColor whiteColor]];
//    GuideViewController * guideVC = [[GuideViewController alloc] init];
//    __weak typeof(self) ws = self;
//    [guideVC setRemoveClickHandler:^{
//        GuideRootViewController * guideRoot = [[GuideRootViewController alloc] init];
//        ws.window.rootViewController = guideRoot;
//    }];
//    self.window.rootViewController = guideVC;
//    [self.window makeKeyAndVisible];

//    self.guideWindow = [[GuideWindow alloc] initWithFrame:[UIScreen mainScreen].bounds removeBlock:^{
//        self.guideWindow.hidden = YES;
//        self.guideWindow = nil;
//    }];
 // 1
    // 2
    // 3
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // 4
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
