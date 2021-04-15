import React, { useContext, useEffect, useState, useRef } from 'react'
import Harvest from './Harvest'
import {HarvestContext} from '../context/HarvestProvider'
import {v4} from 'uuid'
import Panel from './Panel'



function FarmerHarvestList(props) {
   
    const { harvests, getAllHarvests, myHarvestIsClicked} = useContext(HarvestContext)
    
   const {...handleDrag} = props
   const {...handleMouseDown} = props


    useEffect(() => {

      getAllHarvests()
   

  }, []
  )

 
    return (
     
       
       
       <div className="farmerHarvest-App"
            onDrag={handleDrag}
            onMouseDown={handleMouseDown}
                  style={myHarvestIsClicked 
                    ? 
                  {visibility: "visible"} 
                    :
                  {visibility: "hidden"}}
            
       >
             <Panel  >
              
             
                <h1 className="myHarvestText">My Harvests</h1>
                <div item xs={12} className="myHarvestList">
                    {harvests.map(harvest => 
                              <Harvest 
                                  title={harvest.title} 
                                  image={harvest.harvestImg} 
                                  label={harvest.body} 
                                  farmer={harvest.userHandle}
                                  key={v4()} 
                              />)
                    }
                    </div>
             
                </Panel>     
        </div>
       
       

    )
}

export default FarmerHarvestList