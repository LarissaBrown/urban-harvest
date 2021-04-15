import React, { useState, useEffect, useContext, useRef}from 'react'
import  Unsplash,{ toJson } from "unsplash-js"
import {v4} from 'uuid'
import Panel from './Panel'
import {HarvestContext} from '../context/HarvestProvider'
import Resizer from "./Resizer"



export default function FarmerHarvestPhotos(props,{...handleDrag}, {...handleMouseDown}) {
    const [query, setQuery] = useState("")
    const [ pics, setPics ] = useState([])
    const {isClicked} = useContext(HarvestContext)
    const [ mouseDown, setMouseDown ] = useState(false)

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
  

    
    return(
      <div    
      className='unsplash-App'
      style={!isClicked 
        ? 
      {visibility: "visible"} 
        :
      {visibility: "hidden"}}
      >
        <Panel ondrag={handleDrag}> 
          <Resizer onMouseDown={handleMouseDown}/>
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
   