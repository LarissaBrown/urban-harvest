import React from 'react'
import HarvestList from "../components/HarvestList"
import Grid from '@material-ui/core/Grid'



// if user is logged in then the link to Farmer's Page displays and a logout button displays while the login fields are hidden 

export default function Home() {


    return(

        <Grid container  className="home-container">
            
              <HarvestList/>
          
        </Grid>







   
    )
}
