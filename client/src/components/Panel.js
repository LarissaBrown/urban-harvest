import React, {useEffect, useState, useRef} from 'react'
import Resizer from './Resizer'
import FarmersHarvestPage from '../pages/FarmersHarvestPage'
import { Direction } from './constants'



const Panel = ({children}) => {
   

const [ direction, setDirection ] = useState('')
const [mouseDown, setMouseDown] = useState(false)


const panelRef = useRef(null)
const panel = panelRef.current
const handleResize = (direction, movementX, movementY)=> {
  

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
    switch (direction){
        case Direction.TopLeft:
            resizeTop();
            resizeLeft();
            break;
        
        case Direction.Top:
            resizeTop();
            break;

        case Direction.TopRight:
            resizeTop();
            resizeRight();
            break;

        case Direction.Right:
            resizeRight();
            break;

        case Direction.BottomRight:
            resizeBottom();
            resizeRight();
            break;

        case Direction.Bottom:
            resizeBottom();
            break;

        case Direction.BottomLeft:
            resizeBottom();
            resizeLeft();
            break;

        case Direction.Left:
            resizeLeft();
            break;

        default:
            break;

    }

   }

    useEffect(() => {
        const handleMouseMove = (e) => {
            if(!direction) return
            handleResize(direction, e.movementX, e.movementY)
        }
        if(mouseDown){
            window.addEventListener('mousemove', handleMouseMove)
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [mouseDown, direction, handleResize])

    useEffect(() => {
        const handleMouseUp = () => setMouseDown(false)
        window.addEventListener('mouseup', handleMouseUp)

        return () => {
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    const HandleMouseDown = (direction) => () => {
        console.log(direction)
        setDirection(direction)
        setMouseDown(true)
    }
    

    

    const handleDrag = (movementX, movementY) => {
        const panel = panelRef.current
       
        if(!panel)  return
       
       
        const { x, y } = panel.getBoundingClientRect()
           
        panel.style.left = `${x + movementX}px`
        panel.style.top = `${y + movementY}px`
        
    }
  
    const handleMouseDown = () => setMouseDown(true)

   
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
     





    return(
       





        <div className="panel">
            <Resizer {...handleResize}/>
            <FarmersHarvestPage {...handleDrag} {...handleMouseDown} />
                {children}
                
        </div>
       
    )
}

export default Panel