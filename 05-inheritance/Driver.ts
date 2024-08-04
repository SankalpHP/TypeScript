import { Cricle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10,15);
console.log(myShape.getInfo());

let myCricle = new Cricle(5,10,20);
console.log(myCricle.getInfo());

let myRectangle = new Rectangle(0,0,3,7);
console.log(myRectangle.getInfo());


