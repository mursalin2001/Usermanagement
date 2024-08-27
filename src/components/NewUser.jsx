import React from 'react'
import { useState } from 'react'
const NewUser = ( ) => {
    const [username, setUsername] = useState("");
    const handleSubmit = (e)=>
    {
        e.preventDefault();
        const newUser = {id: new Date().getTime().toString(), name : username}
        console.log(newUser);
        handleAddNewUser(newUser);
        setUsername("");
    }
  return (
    <>
    <h2>User Registration</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your name : </label>
        <input className='bg-slate-600' placeholder='Enter Your Name'
         value={username} 
         onChange={(e)=>setUsername(e.target.value)}
          type="text" name='username' required/>
        <br />
        <button className='bg-green-700 p-1 rounded-md' type='submit'>SUBMIT</button>
    </form>
    </>
  )
}

export default NewUser