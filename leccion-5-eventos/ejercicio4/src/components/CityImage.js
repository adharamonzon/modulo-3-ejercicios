import React from 'react';
import Boston from '../images/bostons.jpg';
import Praga from '../images/praga.jpg';
import BuenosAires from '../images/buenosaires.jpg';
import Sydney from '../images/sydney.jpg';
import Tokio from '../images/tokio.jpg';

class CityImage extends React.component {
  render() {
    return {
      praga: ((image = { Praga }), (id = Praga)),
      boston: ((image = { Boston }), (id = Boston)),
      buenosAires: ((image = { BuenosAires }), (id = BuenosAires)),
      sydney: ((image = { Sydney }), (id = Sydney)),
      tokio: ((image = { Tokio }), (id = Tokio)),
    };
  }
}

export default CityImage;
