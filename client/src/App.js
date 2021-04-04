import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import './index.css'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
//components
import Navbar from './components/Navbar'
//pages
import home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

const theme = createMuiTheme({
  palette:{
    primary: {
      light: '',
      main: '#ff4400',
      dark: '',
      contrastText: ''
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      dark: '',
      contrastText: '#ffcc00'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
})

function App() {


  return (

    <MuiThemeProvider theme={theme}>
    <div className="App">
     
        <Navbar/>
        <div className='container'>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
        </div>
    </div>
    </MuiThemeProvider>
  );
}

export default App
