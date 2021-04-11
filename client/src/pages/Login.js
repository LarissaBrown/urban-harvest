import React, { useState, useContext } from 'react'
import  { UserContext } from '../context/UserProvider'
import Grid from '@material-ui/core/Grid'


export default function Login(props) {
   
    
    const {login, user } = useContext(UserContext)
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
        login(inputs)
        setHideform(true)
    }

    return (
        <Grid className="login-container">
           <form  color="inherit" onSubmit={handleSubmit} className={hideform? 'hide-container':"login-form"}>
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


        </Grid >
    )
}