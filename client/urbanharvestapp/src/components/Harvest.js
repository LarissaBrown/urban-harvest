import React from 'react'
import HarvestContactInfo from './HarvestContactInfo'


export default function HarvestPhotos(props){

const {image, label } = props

    return(


        <div>
            <HarvestContactInfo/>
            <img className="img" src={image} alt="harvest-photo"/>
            <h1>{label}</h1>
        </div>
    )
}