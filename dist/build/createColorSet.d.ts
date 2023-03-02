import { COLOR, ColorType } from "@sil/color";
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
export declare const createColorSet: (args: CreateColorSetArgs) => Promise<ColorData>;
export {};
