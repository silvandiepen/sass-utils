"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("@sil/color");
const convertColors_1 = require("./convertColors");
describe("Convert To Type", () => {
    it("Should convert a whole map of Color Data to a certain type", async () => {
        const dark = "#000000";
        const light = "#ffffff";
        const primary = "#ff0000";
        const secondary = "#0000ff";
        const input = await (0, convertColors_1.convertToType)({
            data: {
                dark,
                light,
                primary,
                secondary,
            },
            type: color_1.ColorType.HSLA,
        });
        const expected = {
            dark: (0, color_1.toHSLA)(dark),
            light: (0, color_1.toHSLA)(light),
            primary: (0, color_1.toHSLA)(primary),
            secondary: (0, color_1.toHSLA)(secondary),
        };
        expect(input).toEqual(expected);
    });
});
//# sourceMappingURL=convertColors.test.js.map