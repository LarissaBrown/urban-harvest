import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserProvider from './context/UserProvider'

import {BrowserRouter} from 'react-router-dom'
import HarvestProvider from './context/HarvestProvider';


ReactDOM.render(
 
    <BrowserRouter>
    <UserProvider>
     <HarvestProvider>
    <App />
    </HarvestProvider>
    </UserProvider>
    </BrowserRouter>,
  
  document.getElementById('root')
);



