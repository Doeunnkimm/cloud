export const getVar = (cssVariable: string, initial?: unknown) => {
  return initial == null ? `var(${cssVariable})` : `var(${cssVariable}, ${initial})`;
};
