import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.capacitor',
  appName: 'sales-demo',
  webDir: 'dist/sales-demo/browser',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: 'e3b81122',
      channel: 'Demo',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
