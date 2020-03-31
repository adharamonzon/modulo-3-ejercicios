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
    let resultPerimeter = this.base * this.numberOfSides;
    console.log(resultPerimeter);
  }
  area() {
    let resultArea = Math.pow(this.base, 2);
    console.log(resultArea);
  }
} //declaras la subclase cuadrado, y sobreescribes los parámetros del constructro madre con super();
class Square extends Polygon {
  constructor(side) {
    super(4, side, side);
    this.side = side;
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height); //coge el valor de la base y la altura del constructor madre;
  }
  area() {
    let resultedArea = area(super.area() / 2);
    console.log(resultedArea);
  }
}
//revisar
const form1 = new Polygon('5', '10', '7');
form1.perimeter();
form1.area();

const form2 = new Square('10');
console.log(form2);
form2.area();
form2.perimeter();

const form3 = new Triangle('13', '25');
form3.perimeter();
form3.area();
