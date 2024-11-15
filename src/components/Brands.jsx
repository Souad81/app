import React from 'react'
import Log1 from "../assets/images/log1.svg"
import Log2 from "../assets/images/log2.svg"
import Log3 from "../assets/images/log3.svg"
import Log4 from "../assets/images/log4.svg"
import Log5 from "../assets/images/log5.svg"
import Log6 from "../assets/images/log6.svg"

const Brands = () => {
  return (

    <section id="brands">
    <div className="container">
     <div id="log1" className="brand-box">
     <img src={Log1}/>
    </div>
     <div id="log2" className="brand-box">
    <img src={Log2}/>
    </div>
    <div id="log3" className="brand-box">
     <img src={Log3}/>
    </div>
    <div id="log4" className="brand-box">
    <img src={Log4}/>
     </div>
    <div id="log5" className="brand-box">
     <img src={Log5}/>
    </div>
    <div id="log6" className="brand-box">
    <img src={Log6}/>
    </div>
    </div>
        
    </section>
     

  )
}

export default Brands