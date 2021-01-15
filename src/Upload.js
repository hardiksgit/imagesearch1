import React, { useState } from 'react';
import './App.css';
import ImageUploader from "react-images-upload"; 


const Upload = props => {

      const [pictures, setPictures ] = useState([]);
  const onDrop = picture => {
    setPictures([...pictures,picture]);
  };




  return(
      <div>
         <ImageUploader className="imageupload"
    {...props}
    withIcon = {true}
    buttonText={"Choose an image"}
    onChange={onDrop}
    imgExtension = {[".jpg",".gif",".png"]}
    maxFileSize={5000000}
    withPreview={true}    />

      </div>
 
  )
}

export default Upload;
