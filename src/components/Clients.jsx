import React, {useEffect, useState } from 'react'
import Testeimonial from './Testeimonial'




const Clients = () => {
  const [testimonials, setTestimonials] = useState([])
const getTestimonials = async () => {
  const res = await fetch("https://win24-assignment.azurewebsites.net/api/testimonials")
   const data = await res.json()
   setTestimonials(data)
}

useEffect(() => {
  getTestimonials()
}, [])

  return (
   

<section id="clients">
<div className="container"/>
<div className="headline">
  
 <h1>Clients are Loving Our App</h1>

 <div className='testimonials'>

{
  testimonials.map((testimonial) => (<Testeimonial key={testimonial.id} item={testimonial} />))
}
  
 </div>
 </div>
 

</section>

  )
}

export default Clients