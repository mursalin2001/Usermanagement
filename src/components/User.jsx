import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const User = () => {
    const {users, setUsers} = useContext(UserContext)
    const handledelete = (id) => {
        console.log(`User with id ${id} has been deleted.`);
        handleDeleteUser(id);
    }
    return (
        <article className="grid grid-cols-3 gap-4 bg-slate-800 text-white p-4">
            <h2 className=''>{id}</h2>
            <p>{name}</p>
            <button onClick={()=>{handledelete(id)}}>Delete</button>
        </article>
    )
}

export default User
