import React, {useState, useContext} from 'react'

import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import {HarvestContext} from '../context/HarvestProvider'



function Navbar(props){

const [toggle, setToggle]= useState(true)
const [ hideform, setHideform ] = useState(true)
const {isClicked, setIsClicked, setHome, myHarvestIsClicked, setMyHarvestIsClicked} = useContext(HarvestContext)


const handleSignupLogin =()=> {
    if(toggle === true){
    
   return( 
    <>
        <Signup  setHideform={setHideform} hideform={hideform}/>
   
   </>
   )
    }
    if(toggle === false){
   
    return(
    <>
        <Login   setHideform={setHideform} hideform={hideform}/>
       
     
    </>
   )
    }
}
const handleToggleLogin=()=>{

    setToggle(false)
    setHideform(false)


    

}
const handleToggleSignup=()=>{

   setToggle(true) 
   setHideform(false)

   

}

return (
    <div>
       
            <Button id="button-home"
            color="inherit"  
            onClick={()=> {

                setIsClicked(false)
                setMyHarvestIsClicked(false)
               
            }}
            component={Link} to='/'>
                Home
            </Button>
           
            <Button 
            id="button-login"
            style={{visibility: "visible"}}
            onClick={handleToggleLogin}
            to='/login'
            >
                Login
            </Button>
            
            <Button 
            id="button-signup"
            style={{visibility: "visible"}}
            onClick={handleToggleSignup} 
            to='/signup'
            >
                Signup
            </Button>
                <Button 
                className={!hideform &&'hide-container'} 
                color="inherit" 
                component={Link} 
                to='/farmer-harvest'
                onClick={()=> setIsClicked(true) && setHome(false)}
                >
                    Farmer's Harvest Page
                </Button>
                <Button 
                className={!hideform &&'hide-container'} 
                color="inherit" 
                component={Link} 
                to='/farmer-harvest'
                onClick={()=> setIsClicked(!isClicked)}
                >
                    Image Search
                </Button>
                <Button 
                className={!hideform &&'hide-container'} 
                color="inherit" 
                component={Link} 
                to='/farmer-harvest'
                onClick={()=>setMyHarvestIsClicked(!myHarvestIsClicked)}
                >
                    My Harvests
                </Button>
               
              {handleSignupLogin()}
                 
        
    </div>
)


}

export default Navbar