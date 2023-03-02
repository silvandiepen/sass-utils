import { COLOR } from "@sil/color";
import { ColorData } from "./types";
interface DefineBackAndForegroundArgs {
    data: ColorData;
    mix: [COLOR, COLOR];
}
export declare const defineBackAndForeground: (args: DefineBackAndForegroundArgs) => ColorData;
export declare const asyncDefineBackAndForeground: (args: DefineBackAndForegroundArgs) => Promise<ColorData>;
export {};
