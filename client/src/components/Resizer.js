import React, { useState, useRef, useEffect } from 'react'
import { Direction } from './constants'

const Resizer = ({...props}) => {

    const [ direction, setDirection ] = useState('')
    const [mouseDown, setMouseDown] = useState(false)
  

    const panelRef = useRef(null)

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
    

    return(
        <>
            <div className="top-left" onMouseDown={HandleMouseDown(Direction.TopLeft)}></div>

            <div className="top" onMouseDown={HandleMouseDown(Direction.Top)}></div>

            <div className="top-right" onMouseDown={HandleMouseDown(Direction.TopRight)}></div>

            <div className="top-right" onMouseDown={HandleMouseDown(Direction.Right)}></div>

            <div className="right-bottom" onMouseDown={HandleMouseDown(Direction.BottomRight)}></div>

            <div className="bottom-left" onMouseDown={HandleMouseDown(Direction.Bottom)}></div>

            <div className="bottom" onMouseDown={HandleMouseDown(Direction.BottomLeft)}></div>

            <div className="left" onMouseDown={HandleMouseDown(Direction.Left)}></div>
  
        </>
    )
}

export default Resizer