"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cricle = void 0;
const Shape_1 = require("./Shape");
class Cricle extends Shape_1.Shape {
    constructor(theX, theY, _radius) {
        super(theX, theY);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}
exports.Cricle = Cricle;
