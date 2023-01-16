import React from 'react'

import FarmerHarvestPhotos from "../components/FarmerHarvestPhotos.js"
import FarmerHarvestList from '../components/FarmerHarvestList'



export default function FarmersHarvestPage() {
 
  
    return(

        <div className="farmers-page-container">
            
        <FarmerHarvestPhotos />
        <FarmerHarvestList />
       
          
        </div >
   
    )
}
