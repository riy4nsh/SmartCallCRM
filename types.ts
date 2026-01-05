
export type Screen = 'SPLASH' | 'ONBOARDING' | 'LOGIN' | 'OTP' | 'PROFILE_SETUP' | 'ORG_SETUP' | 'SETUP_COMPLETE' | 'MAIN_APP' | 'NOTIFICATIONS';

export type MainTab = 'HOME' | 'LEADS' | 'DIALER' | 'TEAM' | 'MORE' | 'FOLLOW_UPS';

export interface OnboardingSlide {
  title: string;
  description: string;
  image: string;
}

export interface ThemeMode {
  mode: 'light' | 'dark';
}
