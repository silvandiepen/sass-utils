"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncSplitColors = exports.splitColors = void 0;
const color_1 = require("@sil/color");
const defaultSplitColorsArgs = {
    data: {},
    type: color_1.ColorType.HSLA,
    filters: [],
};
const splitColors = (args) => {
    const config = { ...defaultSplitColorsArgs, ...args };
    let splitData = {};
    Object.keys(config.data).forEach((key) => {
        const filtered = config.filters.some((filter) => key.endsWith(filter));
        if (!filtered) {
            const c = (0, color_1.toType)(config.data[key], config.type);
            switch (config.type) {
                case color_1.ColorType.HSLA:
                    splitData[`${key}-h`] = c.h;
                    splitData[`${key}-s`] = c.s;
                    splitData[`${key}-l`] = c.l;
                    if (c.a)
                        splitData[`${key}-a`] = c.a;
                    break;
                case color_1.ColorType.RGBA:
                    splitData[`${key}-r`] = c.r;
                    splitData[`${key}-g`] = c.g;
                    splitData[`${key}-b`] = c.b;
                    if (c.a)
                        splitData[`${key}-a`] = c.a;
                    break;
                case color_1.ColorType.CMYK:
                    splitData[`${key}-c`] = c.c;
                    splitData[`${key}-m`] = c.m;
                    splitData[`${key}-y`] = c.y;
                    splitData[`${key}-k`] = c.k;
                    break;
                case color_1.ColorType.HSVA:
                    splitData[`${key}-h`] = c.h;
                    splitData[`${key}-s`] = c.s;
                    splitData[`${key}-v`] = c.v;
                    if (c.a)
                        splitData[`${key}-a`] = c.a;
                    break;
                default:
                    console.log(`${config.type} is not supported to be split`);
                    break;
            }
        }
    });
    return splitData;
};
exports.splitColors = splitColors;
const asyncSplitColors = async (args) => {
    const data = (0, exports.splitColors)(args);
    return data;
};
exports.asyncSplitColors = asyncSplitColors;
//# sourceMappingURL=splitColors.js.map