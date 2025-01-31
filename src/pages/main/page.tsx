import { useEffect, useRef } from 'react';
import { bgCss, contentCss, g1Css, g2Css, g3Css, g4Css, g5Css, gradientContainerCss, interactiveCss } from './styles';
import { GradientWaveText } from '@/components';

export const MainPage = () => {
  const interactiveRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (interactiveRef.current == null) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      const smoothFactor = 20;
      curX += (tgX - curX) / smoothFactor;
      curY += (tgY - curY) / smoothFactor;
      (interactiveRef.current as HTMLElement).style.transform = `translate(${Math.round(curX)}px, ${Math.round(
        curY
      )}px)`;
      requestAnimationFrame(() => {
        move();
      });
    };

    const handleMouseover = (e: MouseEvent) => {
      tgX = e.clientX;
      tgY = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseover);
    move();
    return () => {
      document.removeEventListener('mousedown', handleMouseover);
    };
  }, []);
  return (
    <div css={bgCss}>
      <div css={gradientContainerCss}>
        <div css={g1Css} />
        <div css={g2Css} />
        <div css={g3Css} />
        <div css={g4Css} />
        <div css={g5Css} />
        <div
          ref={interactiveRef}
          data-interactive
          css={interactiveCss}
        />
      </div>
      <div css={contentCss}>
        <GradientWaveText style={{ fontSize: '30px' }}>Cloud !</GradientWaveText>
      </div>
    </div>
  );
};
