import { HTMLAttributes } from 'react';
import { Theme } from './types';
import { textCss, themeVaraints } from './styles';

interface GradientWaveTextProps extends HTMLAttributes<HTMLSpanElement> {
  theme?: Theme;
}
export const GradientWaveText = (props: GradientWaveTextProps) => {
  const { theme = 'red-blue', style: styleFromProps, ...restProps } = props;

  const style = {
    ...themeVaraints[theme],
    ...styleFromProps,
  };

  return (
    <span
      css={textCss}
      style={style}
      {...restProps}
    />
  );
};
