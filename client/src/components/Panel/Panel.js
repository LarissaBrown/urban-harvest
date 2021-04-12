import React, { useRef } from 'react'
import FarmerHarvestList from '../FarmerHarvestList'
import Resizer from './Resizer'

const Panel = ({children}) => {

   const panelRef = useRef(null)
   

   const handleDrag = (movementX, movementY)=>{
        const panel = panelRef.current
        if(!panel) return
        
        const { x, y } = panel.getBoundingClientRect()

        panel.style.left = `${x + movementX}px`
        panel.style.top = `${y + movementY}px`
    }
    
    const handleResize = (direction, movementX, movementY)=> {
        console.log(direction, movementX, movementY)

        const panel = panelRef.current
        if(!panel) return

        const { width, height, x, y } = panel.getBoundingClientRect()

        const resizeTop = () => {
            panel.style.height = `${height - movementY}px`
            panel.style.top = `${y + movementY}px`

        }
        const resizeRight = () => {
            panel.style.width = `${width - movementX}px`
            
        }
        const resizeBottom = () => {
            panel.style.height = `${height - movementY}px`
            
        }
        const resizeLeft = () => {
            panel.style.width = `${width - movementX}px`
            panel.style.left = `${x + movementX}px`
            
        }

      }
   
    return(
        <div className="panel" style={{boxSizing: 'border-box'}} >
            <Resizer onResize={handleResize}/>
            
            {children}
        </div>
    )
}

export default Panel