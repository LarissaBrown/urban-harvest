import React, { useState, useContext } from 'react'
import  { UserContext } from '../context/UserProvider'


export default function Login() {
   
    
    const {login, user } = useContext(UserContext)
    const [inputs, setInputs] = useState(user)
   
    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        login(inputs)
        setInputs({})
    }

    return (
        <div class-name="login-container">
           <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    value={user.handle}
                    name="handle"
                    onChange={handleChange}
                    placeholder="Username"/>
                <input
                    type="text"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"/>
                <input
                    type="text"
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"/>
                <input
                    type="text"
                    value={user.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                    placeholder="Confirm Password"/>
                <button>Login</button>
            </form>
        </div>
    )
}