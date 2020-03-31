import React from 'react';
import franPerea from '../images/fran-perea.jpg';
import heart from '../images/heart-regular.svg';

class MediaCard extends React.Component{
  render(){
    const appHeader = (<header className="App-header">
    <img src={franPerea} className="App-logo" alt="logo" />
    <div className= "title">
    <h1>Fran Perea</h1>
    <h3> nacido para cantautar y llorar</h3>
    </div>
  </header>)
    const appMain = (<main>
      <p className="text"> Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.</p>
    </main>)
    const appFooter = (<footer className="footer">
      <small>leer más y mejor...</small>
      <h3>3499 <img className="icon" src={heart}  alt="corasao" title="heart"/></h3>
    </footer>)
 const appRoot = (
<div className="App">
        {appHeader}
        {appMain}
        {appFooter}   
        </div>
 );
    return appRoot;
  }
}
  
export default MediaCard;