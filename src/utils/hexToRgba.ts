export const hexToRgba = (hex: string, opacity: number): string => {
  // hex 값이 #으로 시작하지 않거나 7자리(예: #RRGGBB) 형식이 아니면 오류 발생
  if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('Invalid hex color format. It should be in the format #RRGGBB.');
  }

  // opacity 값이 0과 1 사이의 숫자가 아니면 오류 발생
  if (opacity < 0 || opacity > 1) {
    throw new Error('Opacity must be a number between 0 and 1.');
  }

  // #을 제거하고 6자리 hex 값으로 만듬
  hex = hex.replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
