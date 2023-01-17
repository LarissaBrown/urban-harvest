import React, { useState, useEffect, useContext, useRef } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { v4 } from "uuid";
import { HarvestContext } from "../context/HarvestProvider";
import Panel from "./Panel";

export default function FarmerHarvestPhotos(props) {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { isClicked } = useContext(HarvestContext);

  const unsplash = new Unsplash({
    //import Access_Key from './.env'
    accessKey: "7LtZFhlWzGy0OPYYT0GVrfrXXt7yrVIsDzsPTvl93lk"
    //...other fetch options
    // `fetch` options to be sent with every request
    //headers: { 'X-Custom-Header': 'foo' },
  });

  //syntax for searching photos
  //search.photos(keyword, page, per_page, filters)

  const searchPhotos = async event => {
    event.preventDefault();

    unsplash.search
      .photos(query)
      .then(toJson)
      .then(json => {
        setPics(json.results);
      });
  };

  const handleClick = e => {
    const { name, value } = e.target;
    if (name === "search") {
      return (
        <div>
          <form
            className="unsplash-form"
            onSubmit={
              e => e.preventDefault //get geolocation of user send location, image url and title to be rendered/put in database
            }
          >
            <input
              type="text"
              name="title"
              className="title-input"
              placeholder="Title your Image."
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="imageUrl-input"
              name="imageUrl"
              placeholder="Add Url by clicking Image."
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
            />
          </form>
          <form className="unsplash-form" onSubmit={searchPhotos}>
            <label className="unsplash-label" htmlFor="query">
              {" "}
            </label>
            <input
              type="text"
              name="query"
              className="unsplash-input"
              placeholder={`Type Image search name`}
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button type="submit" className="unsplash-button">
              <p>Search</p>
            </button>
          </form>
        </div>
      );
    }
  };

  return (
    <div
      className="unsplash-App"
      style={!isClicked ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <Panel>
        <form onClick={handleClick}>
          <label className="unsplash-title">Add an Image</label>
          <p style={{ fontFamily: "Helvetica" }}>to represent your harvest</p>
          <select value={value} className="unsplash-button">
            <option name="search" value="search">
              Search Unsplash
            </option>
            <option name="imageUrl" value="imageUrl">
              Add Your Image Url
            </option>
            <option name="default" value="default">
              Add Default Image Url
            </option>
          </select>
        </form>

        <div className="card-list">
          {pics.map(pic => (
            <div key={v4()} className="card">
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
                onClick={e => {
                  setImageUrl(pic.urls.full);
                }}
              ></img>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
