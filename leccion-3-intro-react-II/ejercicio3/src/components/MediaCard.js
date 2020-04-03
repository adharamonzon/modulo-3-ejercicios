import React from 'react';
import PropTypes from 'prop-types';
import heart from '../images/heart-regular.svg';

const MediaCard = props => {
  const appHeader = (
    <header className='App-header'>
      <img src={props.image} className='foto' alt='foto' />
      <div className='title'>
        <h1>{props.name}</h1>
        <h3> {props.subtitle}</h3>
        <h4>{props.date}</h4>
      </div>
    </header>
  );
  const appMain = (
    <main>
      <p className='text'> {props.text}</p>
    </main>
  );
  const appFooter = (
    <footer className='footer'>
      <small>leer más y mejor...</small>
      <h3>
        3499 <img className='icon' src={heart} alt='corasao' title='heart' />
      </h3>
    </footer>
  );
  const appRoot = (
    <div className='App'>
      {appHeader}
      {appMain}
      {appFooter}
    </div>
  );
  return appRoot;
};

MediaCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string
};
export default MediaCard;
