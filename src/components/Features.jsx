import React from 'react'
import Mobile2 from "../assets/images/mobile2.svg"
import IconBox1 from "../assets/images/icon-box-1.svg"
import IconBox2 from "../assets/images/icon-box-2.svg"
import IconBox3 from "../assets/images/icon-box-3.svg"
import IconBox4 from "../assets/images/icon-box-4.svg"
import IconBox5 from "../assets/images/icon-box-5.svg"
import IconBox6 from "../assets/images/icon-box-6.svg"
const Features = () => {
  return (
    
<section id="features">

<div className= "container">
    
    <div className="images">
        <img src={Mobile2} alt="Mobile Image"/>
       </div>
       
    <div className="content">
        <div className="headline">
            <h1>App Features</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
         Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>

    <div className="icons">

 <div className="icon-box">
   <img src={IconBox1} alt="feature"/>
    </div>
    <div className="icon-box">
    <img src={IconBox2} alt="feature"/>
    </div>
    <div className="icon-box">
   <img src={IconBox3} alt="feature"/>
    </div>
    <div className="icon-box">
   <img src={IconBox4} alt="feature"/>
    </div>
    <div className="icon-box">
   <img src={IconBox5} alt="feature"/>
   </div>
   <div className="icon-box">
   <img src={IconBox6} alt="feature"/>
   </div>
    </div>
    </div>
</div>
    </section>







  )
}

export default Features