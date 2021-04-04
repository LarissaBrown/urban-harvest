import React from 'react'
import HarvestList from "../components/HarvestList"
import Grid from '@material-ui/core/Grid'




export default function Home() {


    return(

        <Grid container>
            <Grid item sm={8} xs={12}>
                <h1>Urban Harvest</h1>
                <h2>No waste is good waste.</h2>
            </Grid>
            <Grid item sm={4} xs={12}>
              <HarvestList />
            </Grid>
        </Grid>







   
    )
}
