"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssVariables = exports.colorToCustomProperties = void 0;
const sass_1 = require("../helpers/sass");
const color_1 = require("@sil/color");
const defaultCssVariablesArgs = {
    data: {},
    prefix: "",
    colorToProps: true,
};
const colorToCustomProperties = (key, value) => {
    if ((0, color_1.isRGB)(value) || (0, color_1.isRGBA)(value)) {
        const c = (0, color_1.toRGBA)(value);
        return `rgba(var(--${key}-r, ${c.r}),var(--${key}-g, ${c.g}),var(--${key}-b, ${c.b}),var(--${key}-a, ${c.a}))`;
    }
    if ((0, color_1.isHSL)(value) || (0, color_1.isHSLA)(value)) {
        const c = (0, color_1.toHSLA)(value);
        return `hsla(var(--${key}-h, ${c.h}),var(--${key}-s, ${c.s}),var(--${key}-l, ${c.l}),var(--${key}-a, ${c.a}))`;
    }
    if ((0, color_1.isHSV)(value) || (0, color_1.isHSVA)(value)) {
        const c = (0, color_1.toHSVA)(value);
        return `hsva(var(--${key}-h, ${c.h}),var(--${key}-s, ${c.s}),var(--${key}-v, ${c.v}),var(--${key}-a, ${c.a}))`;
    }
    return value;
};
exports.colorToCustomProperties = colorToCustomProperties;
const isEqual = (object1, object2) => JSON.stringify(object1) == JSON.stringify(object2);
const cssVariables = (args) => {
    const config = { ...defaultCssVariablesArgs, ...args };
    let vars = [];
    const dark = config.data?.dark;
    const light = config.data?.light;
    const createProps = true;
    Object.keys(config.data).forEach((key) => {
        let cssCustomProperty = "";
        if (isEqual(config.data[key], dark) || isEqual(config.data[key], light)) {
            if (isEqual(config.data[key], dark) && key !== "dark")
                cssCustomProperty = `var(--dark, ${(0, sass_1.SassValue)(dark)})`;
            if (isEqual(config.data[key], light) && key !== "light")
                cssCustomProperty = `var(--light, ${(0, sass_1.SassValue)(light)})`;
        }
        vars.push([
            `${key}`,
            cssCustomProperty
                ? cssCustomProperty
                : createProps
                    ? `${(0, exports.colorToCustomProperties)(key, (0, sass_1.SassValue)(config.data[key]))}`
                    : `${(0, sass_1.SassValue)(config.data[key])}`,
        ]);
    });
    let varString = ``;
    vars.forEach((v) => {
        varString += `--${v[0]}: ${v[1]};\n`;
    });
    return varString;
};
exports.cssVariables = cssVariables;
//# sourceMappingURL=cssVariables.js.map