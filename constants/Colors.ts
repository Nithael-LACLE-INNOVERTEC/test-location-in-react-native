/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  primary: '#7f5235', //'#6C340F',
  secondary: '#CF822D',
  danger: '#f72585',
  warning: '#ffba08',
  success: '#20bf6b',
  info: '#4cc9f0',
  lightGrey: '#f2f2f2',
  mediumGrey: '#999999',
  darkGrey: '#666666',
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',
};
