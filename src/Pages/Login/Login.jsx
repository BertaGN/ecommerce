import React, { useState } from 'react'

export const Login = () => {
 const [loginData, setLoginData] = useState({
    fullName: "",
    email: "",
    password: "",
 })

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(loginData)
    }
    const handeInputChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value}) 
    }

  return (
    <div>
    <form>
   <input type="text" placeholder="Enter Your Name" name="fullName" value={loginData.fullName} onChange={handeInputChange}/>
   <input type="email" placeholder="Enter Your Email" name="email" value={loginData.email} onChange={handeInputChange}/>
   <input type="password" placeholder="Enter Your Password" name="password" value={loginData.password} onChange={handeInputChange}/>
   <button onClick={handleRegister}>Register</button>
   </form>
    </div>
  )
}
