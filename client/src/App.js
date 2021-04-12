import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import './index.css'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
//components
import Navbar from './components/Navbar'
//pages
import home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import FarmersHarvestPage from './pages/FarmersHarvestPage'




function App() {





  return (

    
    <div className="App">
        <Navbar/>
        <div className='containerCurrentHarvests'>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/farmer-harvest" component={FarmersHarvestPage}/>
        </Switch>
        </div>
    </div>
    
  );
}

export default App
