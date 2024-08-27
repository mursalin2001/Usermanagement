import React, { useContext } from 'react';
import User from './User';
import { UserContext } from '../context/UserContext'; 

const Users = () => {
  const { users, setUsers } = useContext(UserContext);

  return (
    <section>
      {users && users.length > 0 ? (
        users.map(user => (
          <User key={user.id} user={user}  />
        ))
      ) : (
        <p>No users available</p>
      )}
    </section>
  );
};

export default Users;
