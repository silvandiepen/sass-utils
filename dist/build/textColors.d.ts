import { ColorType } from "@sil/color";
import { ColorData } from "./types";
interface TextColorsArgs {
    data: ColorData;
    type?: ColorType;
}
export declare const textColors: (args: TextColorsArgs) => ColorData;
export declare const asyncTextColors: (args: TextColorsArgs) => Promise<ColorData>;
export {};
