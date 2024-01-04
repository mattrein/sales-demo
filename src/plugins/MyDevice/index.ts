import { registerPlugin } from "@capacitor/core";
import { MyDevicePlugin } from "./definitions";

const MyDevice = registerPlugin<MyDevicePlugin>('MyDevice')

export default MyDevice;