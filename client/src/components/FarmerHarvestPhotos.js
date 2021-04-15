import React, { useState, useEffect, useContext, useRef}from 'react'
import  Unsplash,{ toJson } from "unsplash-js"
import {v4} from 'uuid'
import {HarvestContext} from '../context/HarvestProvider'
import Panel from '../context/Panel'
import {Direction} from './constants'




export default function FarmerHarvestPhotos(props) {
    const [query, setQuery] = useState("")
    const [ pics, setPics ] = useState([])
    const {isClicked} = useContext(HarvestContext)
    

    const unsplash = new Unsplash({
     //import Access_Key from './.env' 
    accessKey: "7LtZFhlWzGy0OPYYT0GVrfrXXt7yrVIsDzsPTvl93lk" 
    //...other fetch options
     // `fetch` options to be sent with every request
    //headers: { 'X-Custom-Header': 'foo' },
    });

  
    //syntax for searching photos
    //search.photos(keyword, page, per_page, filters)

    const searchPhotos = async(event) => {
        event.preventDefault()

        unsplash.search
        .photos(query)
        .then((toJson))
        .then((json) => {
            setPics(json.results)
        })
    };


    //searchPhotos(unsplash)
  
    const [ direction, setDirection ] = useState('')
    const [mouseDown, setMouseDown] = useState(false)
   
    
    const panelRef = useRef(null)
    const panel = panelRef.current

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

  //   useEffect(() => {
  //       const handleMouseMove = (e) => {
  //           if(!direction) return
  //           handleResize(direction, e.movementX, e.movementY)
  //       }
  //       if(mouseDown){
  //           window.addEventListener('mousemove', handleMouseMove)
  //       }

  //       return () => {
  //           window.removeEventListener('mousemove', handleMouseMove)
  //       }
  //   }, [mouseDown, direction, handleResize])

  //   useEffect(() => {
  //       const handleMouseUp = () => setMouseDown(false)
  //       window.addEventListener('mouseup', handleMouseUp)

  //       return () => {
  //           window.removeEventListener('mouseup', handleMouseUp)
  //       }
  //   }, [])
  const handleMouseDown = (direction) => {
    setMouseDown(true)
    setDirection(direction)
  }
  
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
      <div    
      className='unsplash-App'
 
      style={!isClicked 
        ? 
      {visibility: "visible"} 
        :
      {visibility: "hidden"}}
   
      onDrag={handleDrag}
      onMouseDown={handleMouseDown}
      >
      <Panel //onResize={handleResize} 
              onMouseDown={handleMouseDown}
             >
        <>
            {/* <div className="top-left" onMouseDown={handleMouseDown(Direction.TopLeft)}></div>

            <div className="top" onMouseDown={handleMouseDown(Direction.Top)}></div>

            <div className="top-right" onMouseDown={handleMouseDown(Direction.TopRight)}></div>

            <div className="top-right" onMouseDown={handleMouseDown(Direction.Right)}></div>

            <div className="right-bottom" onMouseDown={handleMouseDown(Direction.BottomRight)}></div>

            <div className="bottom-left" onMouseDown={handleMouseDown(Direction.Bottom)}></div>

            <div className="bottom" onMouseDown={handleMouseDown(Direction.BottomLeft)}></div>

            <div className="left" onMouseDown={handleMouseDown(Direction.Left)}></div>
   */}
        </> 
            <h1 className="unsplash-title">Harvest Image Search</h1>

        <form className="unsplash-form" onSubmit={searchPhotos}> 
            <label className="unsplash-label" htmlFor="query"> 
            {" "}
            </label>
            <input
            type="text"
            name="query"
            className="unsplash-input"
            placeholder={`Try "carrots" or "apples"`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="unsplash-button">
            <p>Search</p>
            </button>
        </form>
        <div className="card-list" >
          {
          pics.map((pic) => 
            <div key={v4()} className="card">
                <img
                    className="card--image"
                    alt={pic.alt_description}
                    src={pic.urls.full}
                    width="50%"
                    height="50%"
                ></img>
            </div>)
          }
        </div>
   
        </Panel>
  </div> 
   
  );
}
   