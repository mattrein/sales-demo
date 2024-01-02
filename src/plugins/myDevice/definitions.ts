export interface MyDevicePlugin {
    getBatteryInfo(): Promise<{ batteryLevel: number, isCharging: boolean }>
}