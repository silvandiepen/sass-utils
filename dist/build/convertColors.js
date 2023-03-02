"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToType = void 0;
const color_1 = require("@sil/color");
const defaultConvertToTypeArgs = {
    data: {},
    type: color_1.ColorType.HSLA,
};
const convertToType = (args) => {
    const config = { ...defaultConvertToTypeArgs, ...args };
    let converted = {};
    Object.keys(config.data).forEach((key, index) => {
        converted[key] = (0, color_1.toType)(config.data[key], config.type);
    });
    return converted;
};
exports.convertToType = convertToType;
//# sourceMappingURL=convertColors.js.map