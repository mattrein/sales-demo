import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.addingcapacitor',
  appName: 'sales-demo',
  webDir: 'dist/sales-demo/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
