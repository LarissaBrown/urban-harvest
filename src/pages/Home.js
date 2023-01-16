import React from 'react'
import HarvestList from "../components/HarvestList"




// if user is logged in then the link to Farmer's Page displays and a logout button displays while the login fields are hidden 

export default function Home() {


    return(

        <div   className="home-container">
            
              <HarvestList/>
          
        </div>







   
    )
}
