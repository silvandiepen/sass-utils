"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SassObject = exports.SassValue = exports.isCssBoolean = exports.isCssNumber = exports.isCssPropertyValue = exports.isCssFunction = void 0;
const css_1 = require("../data/css");
const color_1 = require("@sil/color");
const is_1 = require("./is");
const isCssFunction = (str) => {
    return css_1.cssFunctions.some((f) => str.startsWith(`${f}(`) && str.endsWith(")"));
};
exports.isCssFunction = isCssFunction;
const isCssPropertyValue = (str) => css_1.cssValues.includes(str);
exports.isCssPropertyValue = isCssPropertyValue;
const isCssNumber = (str) => {
    let isNumber = false;
    if (str == "0")
        isNumber = true;
    if (typeof str == "number")
        isNumber = true;
    if (typeof str == "string")
        if (parseInt(str) > 0 || str.startsWith("0."))
            isNumber = true;
    return isNumber;
};
exports.isCssNumber = isCssNumber;
const isCssBoolean = (str) => str == "true" || str == "false";
exports.isCssBoolean = isCssBoolean;
const SassValue = (input) => {
    let convertedInput = "";
    if (((0, is_1.isObject)(input) || (0, is_1.isString)(input)) && (0, color_1.isCOLOR)(input)) {
        convertedInput = `${(0, color_1.toString)(input)}`;
    }
    else if ((0, exports.isCssNumber)(input) ||
        (typeof input == "string" && (0, exports.isCssFunction)(input)) ||
        (typeof input == "string" && (0, exports.isCssPropertyValue)(input)) ||
        (typeof input == "string" && (0, exports.isCssBoolean)(input)) ||
        (typeof input == "string" && input.startsWith("'"))) {
        convertedInput = `${input}`;
    }
    else if (typeof input == "string") {
        convertedInput = `"${input}"`;
    }
    else if (typeof input == "boolean") {
        convertedInput = input ? "true" : "false";
    }
    else if (Array.isArray(input)) {
        convertedInput = `(${input.join(", ")})`;
    }
    else {
        let entries = [];
        Object.keys(input).forEach((entry) => {
            entries.push(`${entry} : ${input[entry]}`);
        });
        convertedInput = `(${entries.join(", ")})`;
    }
    return convertedInput;
};
exports.SassValue = SassValue;
const SassObject = (input) => {
    let SassObjectGroup = [];
    Object.keys(input).forEach((entry) => {
        SassObjectGroup.push(`"${entry}": ${(0, exports.SassValue)(input[entry])}`);
    });
    return SassObjectGroup.join(",\n");
};
exports.SassObject = SassObject;
//# sourceMappingURL=sass.js.map