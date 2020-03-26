'use strict';
//con la clase Square:

//1. hacer un método para alcular el perímetro y el área del cuadrado
const size = 16;
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

cuadrado1.perimeter();
cuadrado1.area();
