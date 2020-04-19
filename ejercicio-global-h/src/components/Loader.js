import React from 'react';

const Loader = (props) => {
  return props.isLoading ? <div className='loading loading--fixed' /> : null;
};

export default Loader;
