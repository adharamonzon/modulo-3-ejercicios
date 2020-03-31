import React from 'react';
import franPerea from '../images/fran-perea.jpg';
import heart from '../images/heart-regular.svg';


const MediaCard = promps => {
  const appHeader = (<header className="App-header">
    <img src={franPerea} className="App-logo" alt="logo" />
    <div className= "title">
    <h1>{promps.name}</h1>
    <h3> nacido para cantautar y llorar</h3>
    <h4>{promps.date}</h4>
    </div>
  </header>)
    const appMain = (<main>
      <p className="text"> {promps.text}</p>
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

 
export default MediaCard;