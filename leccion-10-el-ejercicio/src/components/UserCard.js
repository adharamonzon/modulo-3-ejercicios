import React from 'react';

const UserCard = (props) => {
  return (
    <div className='card'>
      <div className='image-container'>
        <img className='img' src={props.userInfo.photo} alt={`imagen de ${props.userInfo.name}`} />
      </div>
      <div className='container'>
        <h1 className='name'>
          {props.userInfo.name} {props.userInfo.lastName}
        </h1>

        <p className='text'>edad: {props.userInfo.age}</p>
        <p className='text'>
          {props.userInfo.city}, {props.userInfo.country}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
