import React, {useState} from 'react'

//MUI Stuff
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import FarmerHarvestPhotos from "./FarmerHarvestPhotos.js"
import { Route, Switch } from 'react-router-dom'
import FarmerHarvestList from '../components/FarmerHarvestList'


function Navbar(props){

const [toggle, setToggle]= useState(true)
const [ hideform, setHideform ] = useState(false)
const [isClicked, setIsClicked] = useState(false)
const [myHarvestIsClicked, setMyHarvestIsClicked] = useState(true)

const handleToggleLogin=()=>{

     setToggle(false)
     setHideform(false)

}
const handleToggleSignup=()=>{

    setToggle(true) 
    setHideform(false)

}


return (
    <AppBar className='nav-container'>
        <Toolbar>
            <Button 
            color="inherit"  
            onClick={()=> setIsClicked(false)}
            component={Link} to='/'>
                Home
            </Button>
           
            <Button 
            color="inherit"  
            onClick={handleToggleLogin} 
            to='/login'>
                Login
            </Button>
            
            <Button 
            color="inherit" 
            onClick={handleToggleSignup} 
            to='/signup'>
                Signup
            </Button>
            {
            toggle
            ?
            <Signup  color="inherit" setHideform={setHideform} hideform={hideform}/>
            :
            <Login  color="inherit" setHideform={setHideform} hideform={hideform}/>
            }
            <div >
                <Button 
                className={!hideform &&'hide-container'} 
                color="inherit" 
                component={Link} 
                to='/farmer-harvest'
                onClick={()=> setIsClicked(true)}
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
                onClick={()=> setMyHarvestIsClicked(!myHarvestIsClicked)}
                >
                    My Harvests
                </Button>
              
                
            </div>
        </Toolbar>
        <h1 className="header-text" >Urban Harvest</h1>
        <h2 className="no-waste">No waste is good waste.</h2>
        <>
        <FarmerHarvestPhotos isClicked={isClicked} />
        <FarmerHarvestList myHarvestIsClicked={myHarvestIsClicked}/>
        </>
    </AppBar>
)


}

export default Navbar