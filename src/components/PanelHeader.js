import React, {useState, useEffect} from 'react'

const PanelHeader = (props) => {

    const [mouseDown, setMouseDown] = useState(false)
    const { onDrag }= props

    useEffect(()=> {
        const handleMouseUp = () => setMouseDown(false)
    
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
        window.addEventListener('mouseup', handleMouseUp)
    }
}, [])

useEffect(() => {
    const handleMouseMove = (e) => onDrag(e.movementX, e.movementY)

    if (mouseDown) {
        window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
        window.removeEventListener('mousemove', handleMouseMove)
    }
    }, [mouseDown, onDrag])

const handleMouseDown = () => setMouseDown(true)

return (
    <div className="panel_header" style={{height: '30px' , backgoundColor:'inherit', fontFamily: 'Helvetica'}}onMouseDown={handleMouseDown}>
      draggable
    
    </div>
)
}

export default PanelHeader