import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.montes.belos',
  appName: 'Montes Belos',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    // url: 'https://localhost:8100',
    url: 'https://6def-2804-22b8-4015-500-5558-de4a-8ca0-342.sa.ngrok.io/',
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 5000,
      launchAutoHide: true,
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: true,
      backgroundColor: '#1E295C',
      useDialog: false,
      layoutName: 'splash',
    },
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId:
        '19701562055-8t6haqdnnkb9ga38ssp4rq81qv2lv1d6.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
