import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'

import FarmerHarvestList from "./FarmerHarvestList"
import HarvestPublishing from "./HarvestPublishing"


export default function FarmersHarvestPage(props) {


    return(
    <>

    <Grid  className='farmer-container' container >
    <div style={{width: '100%', height: '3vh'}}>
    </div>
       <HarvestPublishing/>
        
       <FarmerHarvestList/>
    </Grid>
    </>
    
    )
}