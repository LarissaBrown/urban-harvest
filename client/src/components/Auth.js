import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import  { UserContext } from '../context/UserProvider'

const initInputs = { username: "", password: ""}

export default function Auth() {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login} = useContext(UserContext)
    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    return (
        <div class-name="auth-container">
            <h1>Urban Harvest</h1>
            { !toggle ? 
            <>
                <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    inputs={inputs}
                    btnText="Sign Up"
                />
                <p onClick={( )=> setToggle(prev => !prev)}>Already a Harvest Farmer?</p>
            </>
        :
            <>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                />
                <p onClick={() => setToggle(prev => !prev)}>Become a Harvest Farmer?</p>
            </>

            }
        </div>
    )
}