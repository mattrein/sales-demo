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

        call.resolve([
            "batteryLevel": UIDevice.current.batteryLevel,
            "isCharging": UIDevice.current.batteryState == .charging || UIDevice.current.batteryState == .full
        ])

        UIDevice.current.isBatteryMonitoringEnabled = false
    }
}
