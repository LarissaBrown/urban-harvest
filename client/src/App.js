import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import './index.css'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
//components
import Navbar from './components/Navbar'
//pages
import home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import FarmersHarvestPage from './components/FarmersHarvestPage'


const theme = createMuiTheme({
  palette:{
    primary: {
      light: '',
      main: '#F143AC',
      dark: '#a82e78',
      contrastText: ''
    },
    secondary: {
      light: '#84c887',
      main: '#47824a',
      dark: '',
      contrastText: '#ffcc00'
    },
    contrastThreshold: 3,
    tonalOffset: 0.9
  }
})

function App() {





  return (

    <MuiThemeProvider theme={theme}>
    <div className="App">
     
        <Navbar/>
        <div style={{width: '100%', height: '20vh', minHeight: 100}}>
          <h1 className="header-text">SPACING TEXT NEEDS TWO</h1>
        </div>
        <div className='containerCurrentHarvests'>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/farmer-harvest" component={FarmersHarvestPage}/>
        </Switch>
        </div>
    </div>
    </MuiThemeProvider>
  );
}

export default App
