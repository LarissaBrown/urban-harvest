import React, { useState }from 'react'
import  Unsplash,{ toJson } from "unsplash-js"
import {v4} from 'uuid'
import DragMove from "./DragMove"


//import Access_Key from './.env'



export default function FarmerHarvestPhotos(props) {
    const [query, setQuery] = useState("")
    const [ pics, setPics ] = useState([])
    const [translate, setTranslate] = useState({
        x: 0,
        y: 0
      });
    
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

   
    
      const handleDragMove = (e) => {
        setTranslate({
          x: translate.x + e.movementX,
          y: translate.y + e.movementY
        });
      };
    
    
    return(
        <>
   <DragMove onDragMove={handleDragMove}>
    <div style={{
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
            }} >
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
        <div className="card-list">
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
   </DragMove>  
   </>    
   
  );
}
   