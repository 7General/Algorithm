//
//  GuideView.m
//  AlgorithmNotice
//
//  Created by zzg on 2020/1/4.
//  Copyright © 2020 zzg. All rights reserved.
//

#import "GuideView.h"

@implementation GuideView
- (instancetype)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        UITableView  * view = [[UITableView alloc] initWithFrame:[UIScreen mainScreen].bounds style:UITableViewStylePlain];
        view.delegate = self;
        view.dataSource = self;
        [self addSubview:view];
    }
    return self;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return 100;
}
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    UITableViewCell * cell = [tableView dequeueReusableCellWithIdentifier:@"ids"];
    if (!cell) {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"ids"];
    }
    cell.textLabel.text = @"123";
    return cell;
}

@end
