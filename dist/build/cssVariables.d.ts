import { ColorData } from "./types";
interface CssVariablesArgs {
    data: ColorData;
    prefix?: string;
    colorToProps?: boolean;
}
export declare const colorToCustomProperties: (key: string, value: string) => string;
export declare const cssVariables: (args: CssVariablesArgs) => string;
export {};
