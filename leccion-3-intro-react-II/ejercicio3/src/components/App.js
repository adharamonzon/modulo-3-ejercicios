import React from 'react';
import MediaCard from './MediaCard';
import franPerea from '../images/fran-perea.jpg';
import Riki from '../images/riki.jpg';
import '../stylesheet/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <MediaCard name='Fran Perea' image={franPerea} subtitle='nacido para cantautar y llorar' date='31.03.20' text='Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.' />
        <MediaCard name='Ricki Martin' image={Riki} subtitle='nacido para bailarrrrr' date='12.02.20' text='Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se.' />
      </div>
    );
  }
}
export default App;
