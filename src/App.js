import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import './index.css'
//components
import Navbar from './components/Navbar'
//pages
import home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import FarmersHarvestPage from './pages/FarmersHarvestPage'






function App() {

  function handleHamburgerMenu(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  return (

    
    <div className="App">
     
       <div className="topnav">
      
      <a href="/"className="active">
        <h1 className="header-text" >Urban Harvest</h1>
        <h2 className="no-waste">No waste is good waste.</h2></a>
      <div id="myLinks"style={{display: "block"}} >
      <Navbar/>
      </div>
        <button className="fa fa-bars" onClick={handleHamburgerMenu}>menu</button>
        {/* <i className="fa fa-bars"></i>
      </a> */}
      </div>
      <div className='containerCurrentHarvests'></div>
      
      <Switch >
          <Route exact path='/' component={home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
      
          <Route exact path="/farmer-harvest" component={FarmersHarvestPage}/>
     
      </Switch>
     
    </div>
    
    
  );
}

export default App
