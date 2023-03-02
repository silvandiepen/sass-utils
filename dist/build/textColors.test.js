"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("@sil/color");
const textColors_1 = require("./textColors");
describe("textColors", () => {
    it("Should create all text colors", () => {
        const dark = "#0a0a0a";
        const light = "#fafafa";
        expect((0, textColors_1.textColors)({
            data: {
                primary: "#ff00ff",
                secondary: "#ff00ff",
                tertiary: "#3a5a6a",
                dark,
                light,
            },
        })).toEqual({
            "primary-text": (0, color_1.toHSLA)(dark),
            "secondary-text": (0, color_1.toHSLA)(dark),
            "tertiary-text": (0, color_1.toHSLA)(light),
            "dark-text": (0, color_1.toHSLA)(light),
            "light-text": (0, color_1.toHSLA)(dark),
        });
    });
});
//# sourceMappingURL=textColors.test.js.map