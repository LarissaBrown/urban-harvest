import React from 'react'



export default function Harvest(props){

const {image, label, farmer} = props

    return(


        <div className="harvestDiv">
        
            <img className="harvestImg" src={image} alt="harvest-photo"/>
            <h1 className="harvestLabel">{label}</h1>
            <p className="farmer">{farmer}</p>
        </div>
    )
}