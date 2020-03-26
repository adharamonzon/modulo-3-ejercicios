'use strict';
//con la clase Square:

//hacer un atributo para la longitud del lado del cuadrado
//método para calcular el perímetro
//método para calcular el área

class Square {
  constructor(side) {
    debugger;
    this.side = side;
  }
  perimeter() {
    const resultPerimeter = cuadrado1.side * 4;
    console.log(resultPerimeter);
  }
  area() {
    const resultArea = Math.pow(cuadrado1.side, 2);
    console.log(resultArea);
  }
}
const cuadrado1 = new Square('4');

cuadrado1.perimeter();
cuadrado1.area();
