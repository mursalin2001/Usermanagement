import React from 'react'
import { useState } from 'react'
import Users from './components/Users';
import NewUser from './components/NewUser';
import {UserContext} from './context/UserContext';

const App = () => {
  const [users, setUsers] = useState([{
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    age: 25,
  },
  ]);

  // const handleDeleteUser = (id) => {
  //   console.log('delete user', id);
  //   const filterdUser = users.filter(user => user.id != id)
  //   setUsers(filterdUser);
  // }

  // const handleAddNewUser = (newUser) => {
  //   console.log('add new user', newUser);
  //   setUsers((prev) => [...prev, newUser]);

  // }
  
  return (
    <>
      <UserContext.Provider value={{users, setUsers}}>
        <div>
          <Users  />
          <NewUser  />
          </div>
      </UserContext.Provider>
    
  

    </>
  )
}

export default App






// 1. Create context 
// 2. provide the context 
// 3. use the context 
