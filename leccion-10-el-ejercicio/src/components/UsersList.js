import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
  console.log(props.users.users[0]);
  const users = props.users.users.map((user, index) => {
    return (
      <li className='list-item' key={index}>
        <UserCard className='list-item' userInfo={user} />
      </li>
    );
  });
  return (
    <main className='main'>
      <aside className='aside'>esto es el aside</aside>
      <ul className='list'>{users}</ul>;
    </main>
  );
};

export default UserList;
