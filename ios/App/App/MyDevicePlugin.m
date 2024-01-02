//
//  MyDevicePlugin.m
//  App
//
//  Created by Matt Rein on 1/2/24.
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(MyDevicePlugin, "MyDevice",
           CAP_PLUGIN_METHOD(getBatteryInfo, CAPPluginReturnPromise);
)
