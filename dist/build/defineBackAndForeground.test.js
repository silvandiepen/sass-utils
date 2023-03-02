"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defineBackAndForeground_1 = require("./defineBackAndForeground");
describe("Background and Foreground", () => {
    it("Should have a background and foreground", () => {
        const baseColors = {
            dark: "#111111",
            light: "#fafafa",
            primary: "#ff0000",
            secondary: "#00ff00",
        };
        const input = (0, defineBackAndForeground_1.defineBackAndForeground)({
            data: baseColors,
            mix: ["#000000", "#ffffff"],
        });
        expect(input).toEqual({
            background: "#111111",
            foreground: "#fafafa",
        });
    });
});
//# sourceMappingURL=defineBackAndForeground.test.js.map