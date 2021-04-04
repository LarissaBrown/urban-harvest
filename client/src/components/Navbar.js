import React, {Component} from 'react'

//MUI Stuff
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    
render() {

return (
    <AppBar className='nav-container'>
        <Toolbar>
            <Button color="inherit"  component={Link} to='/' >Home</Button>
            <Button color="inherit" component={Link} to='/login'>Farmer Login</Button>
            <Button color="inherit" component={Link} to='/signup'>Farmer Signup</Button>
        </Toolbar>

    </AppBar>
)
}

}

export default Navbar