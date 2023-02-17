import localFont from '@next/font/local';

// TODO : not used because it seems not stable for now.
// Problem when using browser dev tools and after some code changes,
// Arial font is used instead of the following ones.
export const akrobatThinFont = localFont({ src: '../assets/fonts/Akrobat-Thin.woff2' });
export const akrobatBlackFont = localFont({ src: '../assets/fonts/Akrobat-Black.woff2' });
export const vercettiFont = localFont({ src: '../assets/fonts/Vercetti-Regular.woff2' });
