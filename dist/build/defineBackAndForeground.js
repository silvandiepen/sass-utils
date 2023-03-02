"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncDefineBackAndForeground = exports.defineBackAndForeground = void 0;
const color_1 = require("@sil/color");
const defaultDefineBackAndForegroundArgs = {
    data: {},
    mix: ["#ffffff", "#000000"],
};
const defineBackAndForeground = (args) => {
    const config = { ...defaultDefineBackAndForegroundArgs, ...args };
    let dark = config.data.dark;
    let light = config.data.light;
    if (!dark || !light) {
        dark = "#000000";
        light = "#ffffff";
        return config.data;
    }
    const mode = (0, color_1.getLightness)(config.mix[0]) > (0, color_1.getLightness)(config.mix[1])
        ? "lightmode"
        : "darkmode";
    return {
        background: mode === "darkmode" ? dark : light,
        foreground: mode === "darkmode" ? light : dark,
    };
};
exports.defineBackAndForeground = defineBackAndForeground;
const asyncDefineBackAndForeground = async (args) => {
    const data = (0, exports.defineBackAndForeground)(args);
    return data;
};
exports.asyncDefineBackAndForeground = asyncDefineBackAndForeground;
//# sourceMappingURL=defineBackAndForeground.js.map