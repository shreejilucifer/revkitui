export type Fonts = {
  regular: string
  semibold: string
}

export type Colors = {
  accent: string
  warning: string
  success: string
  error: string
  primary: string
  secondary: string
  muted: string
  bright: string
  shade: string
  tint: string
}

export type Theme = {
  fonts: Fonts
  colors: Colors
}

export const theme: Theme = {
  fonts: {
    regular: 'IBM Plex Sans Regular',
    semibold: 'IBM Plex Sans SemiBold'
  },
  colors: {
    accent: '#0880AE',
    warning: '#F2AC57',
    success: '#14A38B',
    error: '#FF7171',
    primary: '#2C2738',
    secondary: '#756F86',
    muted: '#7C9CBF',
    bright: '#FFFFFF',
    shade: '#DBE2EA',
    tint: '#EBF4F8'
  }
}
