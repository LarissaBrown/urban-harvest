import React, { useState, useEffect, useRef}from 'react'
import  Unsplash,{ toJson } from "unsplash-js"
import {v4} from 'uuid'
import Panel from './Panel/Panel'
//import DragMove from "./DragMove"
//import Resizer from "./Panel/Resizer"
//import Access_Key from './.env'


export default function FarmerHarvestPhotos(props) {
    const [query, setQuery] = useState("")
    const [ pics, setPics ] = useState([])
    const [ mouseDown, setMouseDown ] = useState(false)
    const {isClicked} = props
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


    const unsplash = new Unsplash({
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
    
    
    return(
      <>
  <Panel >
    <div onMouseDown={handleMouseDown} className="panel_container" 
         style={isClicked
         ? 
         {visibility: "visible", position: 'absolute'} 
         :
          {visibility: "hidden", position: 'absolute'}}>
           
        <div className='unsplash-App'>
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
        </div>
 </div>
  </Panel>   
  </> 
   
  );
}
   