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
  },
  plugins: {
    LiveUpdates: {
      appId: '93bf7e9a',
      channel: 'Demo',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
