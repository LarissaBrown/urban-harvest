import React, { useState, useContext } from 'react'
import  { UserContext } from '../context/UserProvider'



export default function Signup(props) {
  

    const {signup, user } = useContext(UserContext)
    const [inputs, setInputs] = useState(user)
    const { hideform, setHideform } = props

 
    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value
       }))
    }

    function handleSubmit(e){
        e.preventDefault()
         signup(inputs)
         setHideform(true)
    }

   

    return (
        <div className="loginSignup">
                   <form onSubmit={handleSubmit} className={hideform? "hide-container":"signup-form"}>
                <input
                     className="login-input"
                    type="text"
                    value={user.handle}
                    name="handle"
                    onChange={handleChange}
                    placeholder="Username"/>
                <input
                     className="login-input"
                    type="text"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"/>
                <input
                     className="login-input"
                    type="text"
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"/>
                <input
                     className="login-input"
                    type="text"
                    value={user.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                    placeholder="Confirm Password"/>
                <button  className="login-input">Signup</button>
            </form>
        </div>
    )
}