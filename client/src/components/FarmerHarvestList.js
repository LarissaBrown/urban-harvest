import React, { useContext, useEffect, useState, useRef } from 'react'
import Harvest from './Harvest'
import {HarvestContext} from '../context/HarvestProvider'
import {v4} from 'uuid'
import Grid from '@material-ui/core/Grid'
import Panel from "./Panel/Panel"






function FarmerHarvestList(props) {

    const { harvests, getAllHarvests} = useContext(HarvestContext)
    const [ mouseDown, setMouseDown ] = useState(false)
  
    const {myHarvestIsClicked} = props

    const panelRef = useRef(null)

    const handleDrag = (movementX, movementY)=>{
      const panel = panelRef.current
      if(!panel) return
      
      const { x, y } = panel.getBoundingClientRect()

      panel.style.left = `${x + movementX}px`
      panel.style.top = `${y + movementY}px`
  }
   
      useEffect(() => {
        const handleMouseUp = () => setMouseDown(false)
        window.addEventListener('mouseup', handleMouseUp)
        return () => {
        window.addEventListener('mouseup', handleMouseUp)
        }
      }, [])
  
      useEffect(() => {
        const handleMouseMove = (e) => handleDrag(e.movementX, e.movementY)
  
        if(mouseDown) {
          window.addEventListener('mousemove', handleMouseMove)
        }
        return () => {
          window.removeEventListener('mousemove',  handleMouseMove)
        }
      }, [mouseDown, handleDrag])
      const handleMouseDown = () => setMouseDown(true)
  
    useEffect(() => {

        getAllHarvests()
       

    }, []
    )
 

    return (
      <>
        <Panel>
          <div onMouseDown={handleMouseDown} className="panel_container" 
           style={!myHarvestIsClicked
            ? 
            {visibility: "visible", position: 'absolute'} 
            :
            {visibility: "hidden", position: 'absolute'}}>
            <Grid className="panel_container">
                 <h1 className="myHarvestText">My Harvests</h1>
                <Grid item xs={12} className="myHarvestList">
                    {harvests.map(harvest => <Harvest title={harvest.title} image={harvest.harvestImg} label={harvest.body} farmer={harvest.userHandle}
                     key={v4()} />)}
                </Grid>
            </Grid>
            </div>
        </Panel>
        </>

    )
}

export default FarmerHarvestList