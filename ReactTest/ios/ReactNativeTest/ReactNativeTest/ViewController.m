//
//  ViewController.m
//  ReactNativeTest
//
//  Created by zhouwei on 2018/8/21.
//  Copyright © 2018年 zhouwei. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://127.0.0.1:8081/index.ios.bundle?platform=ios"];

    RCTRootView *rootView= [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                       moduleName:@"ReactNativeTest"
                                                initialProperties:nil
                                                    launchOptions:nil];
    self.view = rootView;
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
