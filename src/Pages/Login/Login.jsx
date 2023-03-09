import React, { useContext, useState } from 'react'
import UserContext from '../../Context/UserContext/UserContext'



export const Login = () => {
  const {setUser} = useContext(UserContext)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
 const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
 })

    const handleRegister = (e) => {
        e.preventDefault()
       const res = fetch (" http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(registerData),
        headers: {
          "Content-Type": "application/json",
        }
       }) 
    }
    const handeInputChange = (e) => {
        setRegisterData({...registerData, [e.target.name]: e.target.value}) 
    }

    const handleLoginInputChange = (e) => {
      setLoginData ({...loginData, [e.target.name]: e.target.value})
    }

    const handleLogin = async (e) => {
      e.preventDefault()
      const res = await fetch (`http://localhost:3000/users?email=${loginData.email}&password=${loginData.password}`)
      const data = await res.json()
      if (data.length){
        setUser(data[0])
      } 
    }

  return (
    <div>
    <p>Register</p>
    <form>
   <input type="text" placeholder="Enter Your Name" name="fullName" value={registerData.fullName} onChange={handeInputChange}/>
   <input type="email" placeholder="Enter Your Email" name="email" value={registerData.email} onChange={handeInputChange}/>
   <input type="password" placeholder="Enter Your Password" name="password" value={registerData.password} onChange={handeInputChange}/>
   <button onClick={handleRegister}>Register</button>
   </form>
   <p>Login</p>
   <form>
   <input type="email" placeholder="Enter Your Email" name="email" value={loginData.email} onChange={handleLoginInputChange}/>
   <input type="password" placeholder="Enter Your Password" name="password" value={loginData.password} onChange={handleLoginInputChange}/>
   <button onClick={handleLogin}>Acces</button>
   </form>
    </div>
  )
}
