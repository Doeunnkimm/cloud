import { css, keyframes } from '@emotion/react';
import { Theme } from './types';
import { getVar } from '@/utils';

const gradientWave = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;
const backgroundVar = '--cloud-gradient-wave-text-background';
interface ThemeVaraints {
  [backgroundVar]: string;
}
export const themeVaraints: Record<Theme, ThemeVaraints> = {
  'yellow-green': {
    [backgroundVar]: 'linear-gradient(90deg,#fbcd56 0,#d4f5a9)',
  },
  'red-blue': {
    [backgroundVar]: 'linear-gradient(90deg,#ff5f41 0,#0045ff)',
  },
};
export const textCss = css({
  background: getVar(backgroundVar),
  backgroundClip: 'text', // 텍스트 내부에만 배경을 표시
  backgroundSize: '250% 250%',
  WebkitTextFillColor: 'transparent', // 텍스트 색상을 투명하게
  animation: `${gradientWave} 7s ease infinite`,
});
