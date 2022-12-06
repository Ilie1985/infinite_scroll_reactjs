import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}?client_id=Cq2RkLaadrju5hyYjqdJP98UyV98BIIfpX2Qn__Ss0c`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return <h2>stock photos starter</h2>;
}

export default App;
