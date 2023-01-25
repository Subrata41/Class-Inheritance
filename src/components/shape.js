// declare class
class Shape {
    constructor(color) {
        this.color = color;
    }

    drawShape() {
        console.log(`Drawing a shape with color: ${this.color}`);
    }

    calculateArea() {
        console.log("Calculating area of shape");
    }
}
const myShape = new Shape("red");
console.log(myShape.color);
// export class using module.exports
module.exports = Shape;
