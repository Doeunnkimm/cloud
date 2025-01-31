import { hexToRgba } from '@/utils/hexToRgba';
import { css, keyframes } from '@emotion/react';

const moveInCircle = keyframes`
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const moveVertical = keyframes`
    0% {
      transform: translateY(-50%);
    }
    50% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(-50%);
    }
`;

const moveHorizontal = keyframes`
    0% {
      transform: translateX(-50%) translateY(-10%);
    }
    50% {
      transform: translateX(50%) translateY(10%);
    }
    100% {
      transform: translateX(-50%) translateY(-10%);
    }
`;

const PALETTE = {
  bgColor: ['#dff9fb', '#ffffff'],
  color: ['#686de0', '#7ed6df', '#dff9fb', '#ff7979', '#95afc0'],
  interactiveColor: '#8c64ff',
};

export const bgCss = css({
  width: '100vw',
  height: '100vh',
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(40deg, ${PALETTE.bgColor[0]}, ${PALETTE.bgColor[1]})`,
});

const CIRCLE_SIZE = '200%';

export const gradientContainerCss = css({
  filter: 'url(#goo) blur(40px)',
  width: '100%',
  height: '100%',

  '> div:not([data-interactive])': {
    position: 'absolute',
    mixBlendMode: 'hard-light',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
  },
});

export const g1Css = css({
  background: `radial-gradient(circle at center, ${hexToRgba(PALETTE.color[0], 0.8)} 0, ${hexToRgba(
    PALETTE.color[0],
    0
  )} 50%) no-repeat`,
  top: `calc(50% - ${CIRCLE_SIZE} / 2)`,
  left: `calc(50% - ${CIRCLE_SIZE} / 2)`,
  transformOrigin: 'center center',
  animation: `${moveVertical} ease infinite`,
  opacity: 1,
});

export const g2Css = css({
  background: `radial-gradient(circle at center, ${hexToRgba(PALETTE.color[1], 0.8)} 0, ${hexToRgba(
    PALETTE.color[1],
    0
  )} 50%) no-repeat`,
  top: `calc(50% - ${CIRCLE_SIZE} / 2)`,
  left: `calc(50% - ${CIRCLE_SIZE} / 2)`,
  transformOrigin: 'calc(50% - 400px)',
  animation: `${moveInCircle} 20s reverse infinite`,
  opacity: 1,
});

export const g3Css = css({
  background: `radial-gradient(circle at center, ${hexToRgba(PALETTE.color[2], 0.8)} 0, ${hexToRgba(
    PALETTE.color[2],
    0
  )} 50%) no-repeat`,
  top: `calc(50% - ${CIRCLE_SIZE} / 2 + 200px)`,
  left: `calc(50% - ${CIRCLE_SIZE} / 2 - 500px)`,
  transformOrigin: `calc(50% + 400px)`,
  animation: `${moveInCircle} 40s linear infinite`,
  opacity: 1,
});

export const g4Css = css({
  background: `radial-gradient(circle at center, ${hexToRgba(PALETTE.color[3], 0.8)} 0, ${hexToRgba(
    PALETTE.color[3],
    0
  )} 50%) no-repeat`,
  top: `calc(50% - ${CIRCLE_SIZE} / 2)`,
  left: `calc(50% - ${CIRCLE_SIZE} / 2)`,
  transformOrigin: `calc(50% - 200px)`,
  animation: `${moveHorizontal} 40s ease infinite`,
  opacity: 0.7,
});

export const g5Css = css({
  background: `radial-gradient(circle at center, ${hexToRgba(PALETTE.color[4], 0.8)} 0, ${hexToRgba(
    PALETTE.color[4],
    0
  )} 50%) no-repeat`,
  top: `calc(50% - ${CIRCLE_SIZE})`,
  left: `calc(50% - ${CIRCLE_SIZE})`,
  transformOrigin: `calc(50% - 800px) calc(50% + 200px)`,
  animation: `${moveInCircle} 20s ease infinite`,
  opacity: 1,
});

export const interactiveCss = css({
  position: 'absolute',
  background: `radial-gradient(
        circle at center,
        ${hexToRgba(PALETTE.interactiveColor, 0.8)} 0,
        ${hexToRgba(PALETTE.interactiveColor, 0)} 50%
      )
      no-repeat`,
  mixBlendMode: 'hard-light',
  width: '100%',
  height: '100%',
  top: '-50%',
  left: '-50%',
  opacity: 0.7,
});

export const contentCss = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  pointerEvents: 'none',
});
