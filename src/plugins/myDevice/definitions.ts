export interface MyDevicePlugin {
    getBatteryInfo(options: {includeCharging: boolean}): Promise<{ batteryLevel: number, isCharging?: boolean }>
}