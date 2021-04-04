import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export const userAxios = axios.create()



userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

 const UserProvider =(props) =>{

    const initState = {
        user: JSON.parse(localStorage.getItem( "handle" )) || {},
        token: localStorage.getItem( "token" ) || "",  
    }



const [userState, setUserState] = useState(initState)
    
    
function signup(credentials){
    console.log('credentials', credentials)
    userAxios.post("/signup", credentials)
    .then(res => {
    
        const { user, token } = res.data

        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))

        setUserState(prevUserState => ({
            ...prevUserState,
            user, 
            token
        }))
        
    })
    .catch(err => console.dir("error"))
}

function login(credentials){
    userAxios.post('/login', credentials)
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




    return <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                //isUserLoggedIn
                
              
        }}>
            {props.children }
        </UserContext.Provider>
    
}

export default UserProvider