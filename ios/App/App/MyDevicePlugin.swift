//
//  MyDevicePlugin.swift
//  App
//
//  Created by Matt Rein on 1/2/24.
//

import Foundation
import Capacitor

@objc(MyDevicePlugin)
public class MyDevicePlugin: CAPPlugin {
    
    @objc func getBatteryInfo(_ call: CAPPluginCall) {
        UIDevice.current.isBatteryMonitoringEnabled = true

        let includeCharging = call.getBool("includeCharging", false)
        
        if(includeCharging){
            call.resolve([
                "batteryLevel": UIDevice.current.batteryLevel,
                "isCharging": UIDevice.current.batteryState == .charging || UIDevice.current.batteryState == .full
            ])
        } else {
            call.resolve([
                "batteryLevel": UIDevice.current.batteryLevel
            ])
        }


        UIDevice.current.isBatteryMonitoringEnabled = false
    }
}
