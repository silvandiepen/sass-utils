import { ColorType } from "@sil/color";
import { ColorData } from "./types";
interface SplitColorsArgs {
    data: ColorData;
    type?: ColorType;
    filters?: string[];
}
export declare const splitColors: (args: SplitColorsArgs) => ColorData;
export declare const asyncSplitColors: (args: SplitColorsArgs) => Promise<ColorData>;
export {};
