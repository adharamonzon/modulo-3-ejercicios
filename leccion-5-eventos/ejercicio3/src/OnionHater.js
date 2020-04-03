import React from 'react';

//función que si trabaja
const HatePiña = props => {
  constructor(props);
  {
    super(props);
    this.isHating = false;
  }
  const OnionHater = ev => {
    let cebollitis = ev.target.value;
    if (cebollitis.includes('cebolla')) {
      this.isHating = true;
      this.forceUpdate();
    }
  };
  return (
    <div className='textarea'>
      <textarea className={props.hatePiña} onChange={OnionHater}></textarea>
    </div>
  );
};
export default HatePiña;
