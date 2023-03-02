"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncShadeColors = exports.shadeColors = void 0;
const types_1 = require("./types");
const color_1 = require("@sil/color");
const defaultShadeColorsArgs = {
    data: {},
    shades: [],
    mix: ["#000000", "#ffffff"],
    type: color_1.ColorType.HSLA,
};
const defineMixColor = (args) => {
    let mix = args.mixInput[0];
    let altMix = args.mixInput[1];
    const mode = (0, color_1.getLightness)(mix) > (0, color_1.getLightness)(altMix) ? types_1.ColorMode.LIGHT : types_1.ColorMode.DARK;
    if (args.data.dark &&
        args.data.light &&
        mix == defaultShadeColorsArgs.mix[0] &&
        altMix == defaultShadeColorsArgs.mix[1]) {
        switch (mode) {
            case types_1.ColorMode.DARK:
                return [args.data.dark, args.data.light];
            case types_1.ColorMode.LIGHT:
                return [args.data.light, args.data.dark];
        }
    }
    return [mix, altMix];
};
/*

Create all shapes based on your colors.

Mix color is defined based on variables set, or when dark and light are
set in the colorset. These will be used ias the mix color

*/
const shadeColors = (args) => {
    const config = { ...defaultShadeColorsArgs, ...args };
    if (!config.shades.length)
        return config.data;
    let shapeData = {};
    Object.keys(config.data).forEach((color) => {
        const mixColors = defineMixColor({
            data: config.data,
            mixInput: config.mix,
        });
        const colorValue = (0, color_1.toType)(config.data[color], config.type);
        let mixColor = (0, color_1.toType)(mixColors[0], config.type);
        if (JSON.stringify(mixColor) == JSON.stringify(colorValue))
            mixColor = (0, color_1.toType)(mixColors[1], config.type);
        config.shades.forEach((shade) => {
            shapeData[`${color}-${shade}`] = (0, color_1.toType)((0, color_1.mix)((0, color_1.toRGB)(colorValue), (0, color_1.toRGB)(mixColor), shade), config.type);
        });
    });
    return shapeData;
};
exports.shadeColors = shadeColors;
const asyncShadeColors = async (args) => {
    const data = (0, exports.shadeColors)(args);
    return data;
};
exports.asyncShadeColors = asyncShadeColors;
//# sourceMappingURL=shadeColors.js.map