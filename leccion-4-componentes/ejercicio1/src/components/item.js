import React from 'react';

const Item = () => {
  const itemList = (props) => {
    props.items.map((item) => {
      return (
        <div className='item'>
          <h5 className='quantity'>{item.quantity}</h5>
          <div>
            <h5>{item.name}</h5>
            <h6 className='text-muted'>{item.description}</h6>
          </div>
          <div className='badge badge-info'>{item.category}</div>
          <h5 className='price'>{item.price}€</h5>
        </div>
      );
    });
  };
  return <div>{itemList()}</div>;
};

export default Item;
