'use strict';
//definiremos 3 clases: Polygon, Square y Triangle (polígonos regulares)
// clases Square y Triangle son subclases de Polygon
//Polygon tiene: 1 atributo nº de lados, 2 atributos más (longitud (base) y (altura))
// método para calcular el perímetro y otro para el ára

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    const resultPerimeter = triangle1.numberOfSides * 4;
    console.log(resultPerimeter);
  }
  area() {
    const resultArea = Math.pow(triangle1, 2);
    console.log(resultArea);
  }
} //algo pasa!
class Square extends Polygon {
  constructor(side) {
    this.base = side;
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    this.base = base;
    this.height = height;
    const resultedArea = area(super.area() / 2);
    console.log(resultedArea);
  }
}

const triangle1 = new Polygon('5', '10', '20');
console.log(triangle1.numberOfSides, triangle1.base, triangle1.height);
console.log(triangle1.resultPerimeter);

const square1 = new Square('4');

const triangle3 = new Triangle('7', '7');
console.log(resulteArea);
