import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'app.montes.belos',
  appName: 'Montes Belos',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'https://montesbelos.app/',
    cleartext: true,
  },
  plugins: {
    Keyboard: {
      resize: KeyboardResize.Native,
      style: KeyboardStyle.Default,
      resizeOnFullScreen: true,
    },
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
        '853585690486-1a17tk6dllhv04tkmd1haqvesh781dh2.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
