import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    
return (
    <div className="navbar">
        <h1>This is the Navbar</h1>
        <Link to="/profile">Profile </Link>
        <Link to="/public">Public</Link>
        
    </div>
)
}