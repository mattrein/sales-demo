import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.addingcapacitor',
  appName: 'sales-demo',
  webDir: 'dist/sales-demo/browser',
  server: {
    androidScheme: 'https'
  }, 
  ios: {
    webContentsDebuggingEnabled: true
  }
};

export default config;
