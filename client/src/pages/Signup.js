import React, { useState, useContext } from 'react'
import  { UserContext } from '../context/UserProvider'
import Grid from '@material-ui/core/Grid'


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
        <Grid className='signup-container'>
                   <form onSubmit={handleSubmit} className={hideform? 'hide-container':"signup-form"}>
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
                <button>Sign Up</button>
            </form>
        </Grid >
    )
}