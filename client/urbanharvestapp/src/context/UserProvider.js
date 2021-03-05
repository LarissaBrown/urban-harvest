import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",  
    }

  

    const [userState, setUserState] = useState(initState)
    
    
function signup(credentials){
    axios.post('/auth/signup', credentials)
    .then(res => {
        console.log(res.data)
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setUserState(prevUserState => ({
            ...prevUserState,
            user, 
            token
        }))
        
    })
    .catch(err => console.dir(err.response.data.errMsg))
}
function login(credentials){
    axios.post('/auth/login', credentials)
    .then(res => {
        const {user, token} = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setUserState(prevUserState => ({
            ...prevUserState, 
            user, 
            token
        }))
        
    })
    .catch(err => console.dir(err.response.data.errMsg))
}

function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUserState({
        user: {},
        token: ""
    })
   
}




    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                
              
        }}>
            { props.children }
        </UserContext.Provider>
    )
}