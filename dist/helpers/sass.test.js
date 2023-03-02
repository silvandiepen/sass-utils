"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sass_1 = require("./sass");
describe("Sass - isCssFunction", () => {
    it("Var is a css function", () => {
        expect((0, sass_1.isCssFunction)(`var()`)).toBeTruthy();
    });
    it("Max is a css function", () => {
        expect((0, sass_1.isCssFunction)(`max()`)).toBeTruthy();
    });
    it("Min is a css function", () => {
        expect((0, sass_1.isCssFunction)(`min()`)).toBeTruthy();
    });
    it("Calc is a css function", () => {
        expect((0, sass_1.isCssFunction)(`calc(something)`)).toBeTruthy();
    });
    it("Env is a css function", () => {
        expect((0, sass_1.isCssFunction)(`env(something)`)).toBeTruthy();
    });
    it("Env is a css function", () => {
        expect((0, sass_1.isCssFunction)(`rem(something)`)).toBeFalsy();
    });
});
describe("Sass - isCssPropertyValue", () => {
    it("uppercase is a css property value", () => {
        expect((0, sass_1.isCssPropertyValue)(`uppercase`)).toBeTruthy();
    });
    it("lowercase is a css property value", () => {
        expect((0, sass_1.isCssPropertyValue)(`lowercase`)).toBeTruthy();
    });
    it("capitalize is a css property value", () => {
        expect((0, sass_1.isCssPropertyValue)(`capitalize`)).toBeTruthy();
    });
});
describe("Sass - isCssNumber", () => {
    it('"0" is a css number', () => {
        expect((0, sass_1.isCssNumber)("0")).toBeTruthy();
    });
    it("0 is a css number", () => {
        expect((0, sass_1.isCssNumber)(0)).toBeTruthy();
    });
    it("'0.5' is a css number", () => {
        expect((0, sass_1.isCssNumber)("0.5")).toBeTruthy();
    });
    it('"5" is a css number', () => {
        expect((0, sass_1.isCssNumber)("5")).toBeTruthy();
    });
    it("'a' is not a css number", () => {
        expect((0, sass_1.isCssNumber)("a")).toBeFalsy();
    });
});
describe("Sass - isCssBoolean", () => {
    it('"true" is a css boolean', () => {
        expect((0, sass_1.isCssBoolean)("true")).toBeTruthy();
    });
    it('"false" is a css boolean', () => {
        expect((0, sass_1.isCssBoolean)("false")).toBeTruthy();
    });
    it('"falsy" is a css boolean', () => {
        expect((0, sass_1.isCssBoolean)("falsy")).toBeFalsy();
    });
});
describe("Sass - SassValue", () => {
    it('"true" to become a sass value', () => {
        expect((0, sass_1.SassValue)("true")).toBe("true");
    });
    it('"test" to become a sass value', () => {
        expect((0, sass_1.SassValue)("test")).toBe('"test"');
    });
    it('"0" to become a sass value', () => {
        expect((0, sass_1.SassValue)("0")).toBe("0");
    });
    it("0 to become a sass value", () => {
        expect((0, sass_1.SassValue)(0)).toBe("0");
    });
    it("true to become a sass value", () => {
        expect((0, sass_1.SassValue)(true)).toBe("true");
    });
    it("['test','of','array'] to become a sass value", () => {
        expect((0, sass_1.SassValue)(["test", "of", "array"])).toBe(`(test, of, array)`);
    });
});
//# sourceMappingURL=sass.test.js.map