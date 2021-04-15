import React, { useContext, useEffect } from 'react'
import Harvest from './Harvest'
import {HarvestContext} from '../context/HarvestProvider'
import {v4} from 'uuid'
import Grid from '@material-ui/core/Grid'


function HarvestList() {

    const { harvests, getAllHarvests} = useContext(HarvestContext)
   
    useEffect(() => {

        getAllHarvests()
       
    }, []
    )

    return (
            <Grid container className="harvestMap">
                 <h1 className="currentHarvestText">Current Available Harvests</h1>
                <Grid item xs={12} className="harvestList">
                    {harvests.map(harvest => <Harvest title={harvest.title} image={harvest.harvestImg} label={harvest.body} farmer={harvest.userHandle}
                     key={v4()} />)}
                </Grid>
            </Grid>
    )
}

export default HarvestList