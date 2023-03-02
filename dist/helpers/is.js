"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.isObject = void 0;
const isObject = (input) => {
    return typeof input === "object" && !Array.isArray(input) && input !== null;
};
exports.isObject = isObject;
const isString = (input) => {
    return typeof input == "string";
};
exports.isString = isString;
//# sourceMappingURL=is.js.map