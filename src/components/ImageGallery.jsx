import React from 'react'
import IPhone12Pro1 from "../assets/images/iPhone 12 Pro-1.svg"
import IPhone12Pro2 from "../assets/images/iPhone 12 Pro-2.svg"
import IPhone12Pro3 from "../assets/images/iPhone 12 Pro-3.svg"
const ImageGallery = () => {
  return (
  
<div className="image-gallery">
   <img src={IPhone12Pro1} alt="iPhone 12 Pro 1"/>
   <img src={IPhone12Pro2} alt="iPhone 12 Pro 2"/>
   <img src={IPhone12Pro3} alt="iPhone 12 Pro 3"/>
   </div>


  )
}

export default ImageGallery