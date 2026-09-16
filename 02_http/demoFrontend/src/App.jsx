import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handeSubmit=async (e)=>{
    e.preventDefault()
    const data=await axios.post("http://localhost:3000/login",{email,password})

    console.log(email)
    console.log(password)

    setEmail("")
    setPassword("")
  }
  return (
    <>
      <form onSubmit={handeSubmit}>
        <input type="text" placeholder=' email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
        <input type="text" placeholder='password' value={password}
        onChange={(e) => {setPassword(e.target.value)}} />
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default App