import { COLOR, ColorType } from "@sil/color";
import { convertToType } from "./convertColors";
import { asyncShadeColors } from "./shadeColors";
import { asyncSplitColors } from "./splitColors";
import { asyncTextColors } from "./textColors";

import { ColorData } from "./types";

interface CreateColorSetArgs {
  data: ColorData;
  type: ColorType;
  mix?: [COLOR, COLOR];
  shades: number[];
  split?: {
    shades: boolean;
    text: boolean;
  };
}
const defaultCreateColorSet = {
  data: {},
  type: ColorType.HSLA,
  mix: ["#ffffff", "#000000"],
  shades: [],
  split: {
    shades: false,
    text: false,
  },
};

export const createColorSet = async (
  args: CreateColorSetArgs
): Promise<ColorData> => {
  const config = { ...defaultCreateColorSet, ...args };

  const colorSet = await asyncShadeColors({
    data: config.data,
    shades: config.shades,
  })
    .then(async (data) => {
      const colors = { ...config.data, ...data };
      const textData = await asyncTextColors({ data: colors });
      return { ...colors, ...textData };
    })
    .then((data) => {
      return convertToType({ data, type: args.type });
    })
    .then(async (data) => {
      const filters = [];
      if (!config.split.shades)
        filters.push(...config.shades.map((s) => `-${s}`));
      if (!config.split.text) filters.push("-text");

      const splitData = await asyncSplitColors({ data, filters });
      return { ...data, ...splitData };
    });
  return colorSet;
};
