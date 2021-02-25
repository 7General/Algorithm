//
//  ViewController.m
//  TestSort1
//
//  Created by Arthur on 2020/4/13.
//  Copyright © 2020 Arthur. All rights reserved.
//

#import "ViewController.h"
#import "ViewB.h"
#import "ViewD.h"
#import "TestManagerr.h"

@interface ViewController ()<UIScrollViewDelegate>
@property (nonatomic, strong) UIView *view5;
@property (nonatomic, strong) UIView *view5SubView;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    TestManagerr * manager = [TestManagerr shareManager];
    TestManagerr * manager1 = [[TestManagerr alloc] init];
    NSLog(@"=-===");
    //    NSMutableArray *arr = [NSMutableArray array];
    //    [arr addObject:@"test"];
    //    [arr addObject:@"number"];
    //    NSLog(@"%@", arr[0]);
        
//    Class commonClass = [self commonClass1:[ViewB class] andClass:[ViewD class]];
//    NSLog(@"%@",commonClass);
    
//
//    NSMutableDictionary * param = [NSMutableDictionary dictionary];
//    [param setValue:@"123322" forKey:@"sss"];
//    NSLog(@"=====param%@",param);
//    NSDictionary * temp = @{@"6666666":@"rrrrrrrrrrrr"};
////    [param setDictionary:temp];
//    [param addEntriesFromDictionary:temp];
//    NSLog(@"=====param%@",param);
    
    
    UIScrollView *scrollView = [[UIScrollView alloc] initWithFrame:self.view.bounds];
    scrollView.delegate = self;
    [self.view addSubview:scrollView];
    scrollView.contentSize = CGSizeMake(0, 2*self.view.bounds.size.height);
    
    
    CGFloat DZHWidth = self.view.bounds.size.width;
    UIView *view1 = [[UIView alloc] initWithFrame:(CGRectMake(0, 0, DZHWidth, 100))];
    view1.backgroundColor = [UIColor grayColor];
    [scrollView addSubview:view1];
    
    
    
    UIView *view2 = [[UIView alloc] initWithFrame:(CGRectMake(0, 102, DZHWidth, 100))];
    view2.backgroundColor = [UIColor grayColor];
    [scrollView addSubview:view2];
    
    self.view5 = view2;
    
    self.view5SubView = [[UIView alloc] initWithFrame:(CGRectMake(0, 0, DZHWidth, 100))];
    self.view5SubView.backgroundColor = [UIColor greenColor];
    [self.view5 addSubview:self.view5SubView];
    
    UIView *view3 = [[UIView alloc] initWithFrame:(CGRectMake(0, 204, DZHWidth, 100))];
    view3.backgroundColor = [UIColor grayColor];
    [scrollView addSubview:view3];
    
    UIView *view4 = [[UIView alloc] initWithFrame:(CGRectMake(0, 306, DZHWidth, 100))];
    view4.backgroundColor = [UIColor grayColor];
    [scrollView addSubview:view4];
    
    UIView *view5 = [[UIView alloc] initWithFrame:(CGRectMake(0, 408, DZHWidth, 100))];
    view5.backgroundColor = [UIColor redColor];
    [scrollView addSubview:view5];

    
    UIView *view6 = [[UIView alloc] initWithFrame:(CGRectMake(0, 510, DZHWidth, 100))];
    view6.backgroundColor = [UIColor grayColor];
    [scrollView addSubview:view6];
    
    UIView *view7 = [[UIView alloc] initWithFrame:(CGRectMake(0, 612, DZHWidth, 100))];
    view7.backgroundColor = [UIColor grayColor];
    [scrollView addSubview:view7];
    
    UIView *view8 = [[UIView alloc] initWithFrame:(CGRectMake(0, 714, DZHWidth, 100))];
    view8.backgroundColor = [UIColor grayColor];
    [scrollView addSubview:view8];
}

-(void)scrollViewDidScroll:(UIScrollView *)scrollView {
    CGFloat DZHWidth = self.view.bounds.size.width;
    CGPoint point = [self.view5.superview convertPoint:self.view5.frame.origin toView:self.view];
    NSLog(@"----|%lf",point.y);
    
    if (point.y<0) {
        self.view5SubView.frame = CGRectMake(0, 0, DZHWidth, 100);
        [self.view addSubview:self.view5SubView];
    } else {
        self.view5SubView.frame = CGRectMake(0, 0, DZHWidth, 100);
        [self.view5 addSubview:self.view5SubView];
    }
  
}





// 获取所有父类
- (NSArray *)superClasses:(Class)class {
    if (class == nil) {
        return @[];
    }
    NSMutableArray *result = [NSMutableArray array];
    while (class != nil) {
        [result addObject:class];
        class = [class superclass];
    }
    return [result copy];
}

- (Class)commonClass1:(Class)classA andClass:(Class)classB {
    NSArray *arr1 = [self superClasses:classA];
    NSArray *arr2 = [self superClasses:classB];
    NSInteger count = arr1.count < arr2.count ? arr1.count : arr2.count;
    Class resultClass;
    for (NSUInteger i = 0; i < count; i++) {
        Class classA = arr1[arr1.count - i -1];
        Class classB = arr2[arr2.count - i -1];
        if(classA == classB){
            resultClass = classA;
        }else{
            break;
        }
    }
    return resultClass;
}
@end
