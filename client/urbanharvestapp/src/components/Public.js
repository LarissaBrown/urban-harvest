import React from 'react'
import Auth from './Auth.js'
import HarvestList from './HarvestList.js'
import Navbar from './Navbar.js'



export default function Public() {


    return(

    <div>
        <h1>here we have the Nav bar Auth and Harvest List</h1>
        <Navbar/>
        <Auth/>
        <HarvestList/>
    </div>
    )
}
