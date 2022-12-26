import React from 'react';
import Gallery from "react-photo-gallery";
import PhotoList from './photosList'


const Photos = () =>{
  return(
      <div className="photos">
        <Gallery photos={PhotoList} direction={"column"}/>
      </div>
  )
}

export default Photos
