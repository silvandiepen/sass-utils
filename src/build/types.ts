import { COLOR } from "@sil/color";

export type Color = COLOR;

export interface ColorData {
  [key: string]: Color | number;
}

export const ColorMode = {
  DARK: "dark",
  LIGHT: "light",
};
type ColorMode = typeof ColorMode[keyof typeof ColorMode];
