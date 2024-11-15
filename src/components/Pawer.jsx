import React from 'react'
import AppStore from "../assets/images/appstore.svg"
import GooglePlay from "../assets/images/googleplay.svg"
import Mobile from "../assets/images/mobile.svg"
const Pawer = () => {
  return (
  
    <section id="pawer">
<div className= "container">
<div className="headline">
<h1>Manage All Your Money in One App</h1>
</div>
<div className="content">
<p>We offer you a new generation of the mobile banking.
Save, spend & manage money in your pocket.</p>

<div className="buttons">
<a className="btn-app" href="#"><img src={AppStore} alt="appstore"/></a>
<a className="btn-app" href="#"><img src={GooglePlay} alt="google play"/></a>
</div>

<a href= "#" className="discover-more">
        <span className="btn-circle">
<i className="fa-solid fa-chevron-down"></i>
</span>  
 <span>Discover more</span>
 </a>
</div>

 <div className="images">
<img className="img-back" src={Mobile} alt="iphon my budget"/>
        

</div>
 </div>
    
    </section>
  )
}

export default Pawer