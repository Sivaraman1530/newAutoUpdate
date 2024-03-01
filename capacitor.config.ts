import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.newautoupdate',
  appName: 'newautoupdate',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
