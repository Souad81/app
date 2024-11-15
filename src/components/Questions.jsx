import React from 'react'
import Call from "../assets/images/call.svg";
import Chat from "../assets/images/chat.svg";


const Questions = () => {
  return (
  
<section id ="questions">
<div className="container"/>
 <div className="headline">

 <h1>Any questions?Check out the FAQs</h1>  
 <p>Still have unanswered questions and need to get in touch?</p>

 </div>
 <div className="content"/>
 <div className="contact-boxs">
<div className="contact-box"> 
<img src={Call} alt="call" className="contact"/> 
 <p>Still have questions?</p>

 <a href= "#" className="contact us">
 <span>Contact us</span>
 <i className="fa-sharp fa-light fa-arrow-right"></i>
 
                      
 </a>
 </div>
    
 <div className="contact-box"> 
<img src={Chat} alt="chat" className="contact"/> 
 <p>Don't like phone calls?</p>
    
 <a href= "#" className="contact us">
 <span>Contact us</span>
 <i className="fa-sharp fa-light fa-arrow-right"></i>
                          
</a>
 </div>
 </div>
    
</section>


  )
}

export default Questions