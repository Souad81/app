import React from 'react'
import Icon1 from "../assets/images/icon1.svg"
import Icon3 from "../assets/images/icon3.svg"
import Money2 from "../assets/images/money-2.svg"
const Contacts = () => {
  return (
  
<section id="contacts">
 <div className="container">
 <div className="headline">
 <h1>Receive payment from international bank details</h1>
 </div>
 <div className="content-image-wrapper">
<div className="content">
<ul>
<li>
<p><img src={Icon1} alt="icon"/>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
 </li>
 <li>
 <p><img src={Icon3} alt="icon"/>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
 </li>
</ul>
<button className="btn">Learn more</button>
</div>
<img src={Money2} alt="send money" className="side-image"/>
</div>
</div>
</section>

  )
}

export default Contacts