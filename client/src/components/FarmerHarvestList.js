import React, { useContext, useEffect, useState, useRef } from 'react'
import Harvest from './Harvest'
import {HarvestContext} from '../context/HarvestProvider'
import {v4} from 'uuid'
import Panel from '../context/Panel'
// import {Direction} from './constants'

function FarmerHarvestList(props) {
   
    const { harvests, getAllHarvests, myHarvestIsClicked} = useContext(HarvestContext)
    const panelRef = useRef(null)

    useEffect(() => {

      getAllHarvests()
   

  }, []
  )

  
  // const [ direction, setDirection ] = useState('')
  const [mouseDown, setMouseDown] = useState(false)
  
 
  
 

//   const handleResize = (direction, movementX, movementY)=> {
//   console.log(direction, movementX, movementY)

//   const panel = panelRef.current
//   if(!panel) return

//   const { width, height, x, y } = panel.getBoundingClientRect()

//   const resizeTop = () => {
//       panel.style.height = `${height - movementY}px`
//       panel.style.top = `${y + movementY}px`

//   }
//   const resizeRight = () => {
//       panel.style.width = `${width - movementX}px`
      
//   }
//   const resizeBottom = () => {
//       panel.style.height = `${height - movementY}px`
      
//   }
//   const resizeLeft = () => {
//       panel.style.width = `${width - movementX}px`
//       panel.style.left = `${x + movementX}px`
      
//   }
//   switch (direction){
//       case Direction.TopLeft:
//           resizeTop();
//           resizeLeft();
//           break;
      
//       case Direction.Top:
//           resizeTop();
//           break;

//       case Direction.TopRight:
//           resizeTop();
//           resizeRight();
//           break;

//       case Direction.Right:
//           resizeRight();
//           break;

//       case Direction.BottomRight:
//           resizeBottom();
//           resizeRight();
//           break;

//       case Direction.Bottom:
//           resizeBottom();
//           break;

//       case Direction.BottomLeft:
//           resizeBottom();
//           resizeLeft();
//           break;

//       case Direction.Left:
//           resizeLeft();
//           break;

//       default:
//           break;

//   }

//  }

  // useEffect(() => {
  //     const handleMouseMove = (e) => {
  //         if(!direction) return
  //         handleResize(direction, e.movementX, e.movementY)
  //     }
  //     if(mouseDown){
  //         window.addEventListener('mousemove', handleMouseMove)
  //     }

  //     return () => {
  //         window.removeEventListener('mousemove', handleMouseMove)
  //     }
  // }, [mouseDown, direction, handleResize])





  const handleDrag = (movementX, movementY) => {
    const panel = panelRef.current
   
    if(!panel)  return
   
   
    const { x, y } = panel.getBoundingClientRect()
       
    panel.style.left = `${x + movementX}px`
    panel.style.top = `${y + movementY}px`
    
}
useEffect(() => {
  const handleMouseUp = () => setMouseDown(false)
  window.addEventListener('mouseup', handleMouseUp)

  return () => {
      window.removeEventListener('mouseup', handleMouseUp)
  }
}, [])

const handleMouseDown = () => {
setMouseDown(true)

}
console.log(handleMouseDown)


useEffect(() => {
  const handleMouseMove = (e) => handleDrag(e.movementX, e.movementY)

  if(mouseDown) {
    window.addEventListener('mousemove', handleMouseMove)
  }
  return () => {
    window.removeEventListener('mousemove',  handleMouseMove)
  }
}, [mouseDown, handleDrag])




 
    return (
     
       
       <div classsName="panel-container"  onDrag={handleDrag}
       onMouseDown={handleMouseDown} >

       
        <Panel     ref={panelRef}  //onResize={handleResize} 
            
             >
            <div className="farmerHarvest-App"
         
              style={myHarvestIsClicked 
              ? 
              {visibility: "visible"} 
              :
              {visibility: "hidden"}}
> 
        {/* <>
            <div className="top-left" onMouseDown={handleMouseDown(Direction.TopLeft)}></div>

            <div className="top" onMouseDown={handleMouseDown(Direction.Top)}></div>

            <div className="top-right" onMouseDown={handleMouseDown(Direction.TopRight)}></div>

            <div className="top-right" onMouseDown={handleMouseDown(Direction.Right)}></div>

            <div className="right-bottom" onMouseDown={handleMouseDown(Direction.BottomRight)}></div>

            <div className="bottom-left" onMouseDown={handleMouseDown(Direction.Bottom)}></div>

            <div className="bottom" onMouseDown={handleMouseDown(Direction.BottomLeft)}></div>

            <div className="left" onMouseDown={handleMouseDown(Direction.Left)}></div>
  
        </>  */}

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
            </div>
          </Panel>        
        </div>
       

    )
}

export default FarmerHarvestList