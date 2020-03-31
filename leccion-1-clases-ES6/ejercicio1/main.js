'use strict';
//con la clase Square:

//1. hacer un método para alcular el perímetro y el área del cuadrado

class Square {
  perimeter() {
    const resultPerimeter = size * 4;
    console.log(resultPerimeter);
  }
  area() {
    const resultArea = Math.pow(size, 2);
    console.log(resultArea);
  }
}
const cuadrado1 = new Square();

cuadrado1.perimeter(16);
cuadrado1.area(16);

export default {
  getSquare: Square
};
