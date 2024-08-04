import { Cricle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCricle = new Cricle(5,10,20);
let myRectangle = new Rectangle(0,0,3,7);

// declare an array of shape ...initially empty
let theShapes: Shape[] = [];

// add the shapes to the array
theShapes.push(myCricle);
theShapes.push(myRectangle);

for (const tempShape of theShapes) {
  console.log(tempShape.getInfo());
  console.log(tempShape.calculateArea());
  console.log();
  
}