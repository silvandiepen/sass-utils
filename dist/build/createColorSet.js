"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createColorSet = void 0;
const color_1 = require("@sil/color");
const convertColors_1 = require("./convertColors");
const defineBackAndForeground_1 = require("./defineBackAndForeground");
const shadeColors_1 = require("./shadeColors");
const splitColors_1 = require("./splitColors");
const textColors_1 = require("./textColors");
const defaultCreateColorSet = {
    data: {},
    type: color_1.ColorType.HSLA,
    mix: ["#ffffff", "#000000"],
    shades: [],
    split: {
        shades: false,
        text: false,
    },
};
const hello = async (...args) => {
    return args;
};
const createColorSet = async (args) => {
    const config = { ...defaultCreateColorSet, ...args };
    const colorSet = await hello()
        .then(async () => {
        const colors = { ...config.data };
        const groundData = await (0, defineBackAndForeground_1.asyncDefineBackAndForeground)({
            data: colors,
            mix: config.mix,
        });
        return { ...colors, ...groundData };
    })
        .then(async (data) => {
        const colors = { ...config.data, ...data };
        const shadeColors = await (0, shadeColors_1.asyncShadeColors)({
            data: colors,
            shades: config.shades,
        });
        return { ...colors, ...shadeColors };
    })
        .then(async (data) => {
        const colors = { ...config.data, ...data };
        const textData = await (0, textColors_1.asyncTextColors)({ data: colors });
        return { ...colors, ...textData };
    })
        .then((data) => {
        return (0, convertColors_1.convertToType)({ data, type: args.type });
    })
        .then(async (data) => {
        const filters = [];
        if (!config.split.shades)
            filters.push(...config.shades.map((s) => `-${s}`));
        if (!config.split.text)
            filters.push("-text");
        const splitData = await (0, splitColors_1.asyncSplitColors)({ data, filters });
        return { ...data, ...splitData };
    });
    return colorSet;
};
exports.createColorSet = createColorSet;
//# sourceMappingURL=createColorSet.js.map