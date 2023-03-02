import { ColorType } from "@sil/color";
import { ColorData } from "./types";
interface ConvertToTypeArgs {
    data: ColorData;
    type: ColorType;
}
export declare const convertToType: (args: ConvertToTypeArgs) => ColorData;
export {};
