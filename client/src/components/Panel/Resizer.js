import React, { useState, useEffect } from 'react'
import { Direction } from './constants'

const Resizer = ({ onResize }) => {

    const [ direction, setDirection ] = useState('')
    const [mouseDown, setMouseDown] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            if(!direction) return
            onResize(direction, e.movementX, e.movementY)
        }
        if(mouseDown){
            window.addEventListener('mousemove', handleMouseMove)
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [mouseDown, direction, onResize])

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
            <div className="top-left" onMouseDown={HandleMouseDown(direction.TopLeft)}></div>

            <div className="top" onMouseDown={HandleMouseDown(direction.Top)}></div>

            <div className="top-right" onMouseDown={HandleMouseDown(direction.TopRight)}></div>

            <div className="top-right" onMouseDown={HandleMouseDown(direction.Right)}></div>

            <div className="right-bottom" onMouseDown={HandleMouseDown(direction.BottomRight)}></div>

            <div className="bottom-left" onMouseDown={HandleMouseDown(direction.Bottom)}></div>

            <div className="bottom" onMouseDown={HandleMouseDown(direction.BottomLeft)}></div>

            <div className="left" onMouseDown={HandleMouseDown(direction.Left)}></div>
        </>
    )
}

export default Resizer