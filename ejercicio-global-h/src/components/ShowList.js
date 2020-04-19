import React from 'react';
import CardItem from './CardItem';

const ShowList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>{props.emptyListMessage}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className='title--medium'>{props.title} </h2>
        <ul className='cards'>
          {props.items.map((item) => {
            return <CardItem key={item.id} id={item.id} name={item.name} image={item.image} addFavorite={props.addFavorite} />;
          })}
        </ul>
      </div>
    );
  }
};

export default ShowList;
