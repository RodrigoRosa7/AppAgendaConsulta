import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'AppAgendaConsulta',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // tempo que a splash screen ficará visível (em ms)
      launchAutoHide: true, // automaticamente ocultar a splash screen
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'splash',
      iosSplashResourceName: 'Default',
      showSpinner: true,
      spinnerColor: '#000000',
    },
  },
};

export default config;
