import React from 'react';
import CardItem from './CardItem';

const ShowList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.item.map((item) => {
        return <CardItem key={item.id} name={item.show.name} />;
      })}
    </ul>
  );
};

export default ShowList;
