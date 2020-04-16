import React from 'react';

const ItemList = (props) => {
  return (
    <>
      <h2>{props.series.name}</h2>
      <p>{props.series.languaje}</p>
      <img src={props.series.image.medium} />
    </>
  );
};

export default ItemList;
