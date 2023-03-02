"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTextColors = exports.textColors = void 0;
const color_1 = require("@sil/color");
const defaultTextColorsArgs = {
    data: {},
    type: color_1.ColorType.HSLA,
};
const textColors = (args) => {
    const config = { ...defaultTextColorsArgs, ...args };
    const textData = {};
    const darkColor = config.data.dark
        ? (0, color_1.toType)(config.data.dark, config.type)
        : (0, color_1.toType)("#000000", config.type);
    const lightColor = config.data.light
        ? (0, color_1.toType)(config.data.light, config.type)
        : (0, color_1.toType)("#ffffff", config.type);
    Object.keys(config.data).forEach((color) => {
        textData[`${color}-text`] = (0, color_1.textColor)(config.data[color], {
            dark: darkColor,
            light: lightColor,
            offset: 50,
        });
    });
    return textData;
};
exports.textColors = textColors;
const asyncTextColors = async (args) => {
    const data = (0, exports.textColors)(args);
    return data;
};
exports.asyncTextColors = asyncTextColors;
//# sourceMappingURL=textColors.js.map