import React, { useContext, useEffect } from 'react'
import Harvest from './Harvest'
import {HarvestContext} from '../context/HarvestProvider'
import {v4} from 'uuid'






function HarvestList() {

    const { harvests, getAllHarvests} = useContext(HarvestContext)
    console.log(harvests)
   
    useEffect(() => {

        getAllHarvests([])
        console.log('useEffectHarvests', harvests)

    }, []
    )

    return (
        <div className="currentHarvests">

            <h1>Current Available Harvests</h1>
            { harvests.map(harvest => <Harvest image={harvest.harvestImg} label={harvest.body} farmer={harvest.userHandle}
                key={v4()} />)}
        </div>
    )
}

export default HarvestList