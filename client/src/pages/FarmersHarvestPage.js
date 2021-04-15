import React from 'react'

import FarmerHarvestPhotos from "../components/FarmerHarvestPhotos.js"
import FarmerHarvestList from '../components/FarmerHarvestList'



export default function FarmersHarvestPage({...handleDrag}, {...handleMouseDown}) {
 
  
    return(

        <div className="farmers-page-container">
            
        <FarmerHarvestPhotos {...handleDrag} {...handleMouseDown}/>
        <FarmerHarvestList {...handleDrag} {...handleMouseDown}/>
       
          
        </div >
   
    )
}
