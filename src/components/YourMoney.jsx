import React from 'react'
import CheckCircle from "../assets/images/check_circle.svg"
import Money1 from "../assets/images/money-1.svg"


const YourMoney = () => {
  return (
   
         
<section id="yourmoney">
<div className="container">
<div className="headline">
 <h1>Make your money transfer simple and clear</h1>
 </div>
<div className="content-image-wrapper">
<div className="content">
 <ul>
 <li>
<p><img src={CheckCircle} alt="Check icon"/>Banking transactions are free for you</p>
</li>
<li>
 <p><img src={CheckCircle} alt="Check icon"/>No monthly cash commission</p>
</li>
<li>
 <p><img src={CheckCircle} alt="Check icon"/>Manage payments and transactions online</p>
  </li>
</ul>
 <button className="btn">Learn more</button>
</div>
 <img src={Money1} alt="send money" className="side-image"/>
</div>
 </div>
 
</section>

  )
}

export default YourMoney