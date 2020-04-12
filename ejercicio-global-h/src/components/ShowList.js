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
        <h2>{props.title}</h2>
        <ol>
          {props.items.map((item) => {
            return <CardItem key={item.id} name={item.show.name} />;
          })}
        </ol>
      </div>
    );
  }
};

export default ShowList;
