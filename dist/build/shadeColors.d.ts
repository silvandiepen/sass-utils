import { ColorData, COLOR } from "./types";
import { ColorType } from "@sil/color";
interface ShadeColorsArgs {
    data: ColorData;
    shades: number[];
    mix?: [COLOR, COLOR];
    type?: ColorType;
}
export declare const shadeColors: (args: ShadeColorsArgs) => ColorData;
export declare const asyncShadeColors: (args: ShadeColorsArgs) => Promise<ColorData>;
export {};
