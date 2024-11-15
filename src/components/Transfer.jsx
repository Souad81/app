import React from 'react'
import Iphone5 from "../assets/images/iPhone 12 Pro-5.svg"

const Transfer = () => {
  return (
    <section id="transfer">
    <div className="container">
   
    <div className="headline">
       <h1>How Does It Work?</h1>
     <img src={Iphone5} alt="iPhone 12 Pro 5 "/>
     </div>
                  
    <div className="content">
    <div className="headline-2">
    <h2>Transfers to people from
     your contact list</h2>
    </div>
     <p>Proin volutpat mollis egestas. Nam luctus facilisis
    ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
    </div>
    </div>
   </section>
  )
}

export default Transfer