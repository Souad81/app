import React, { useState } from 'react'
import Notification from "../assets/images/notification.svg"
import BxEnvelope from "../assets/images/bx-envelope.svg"

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubscribe = async () => {
    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setMessage('Thank you for subscribing!')
        setEmail('')
      } else {
        setMessage('Failed to subscribe. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.')
    }
  };

  return (
    <section id="subscribe">
      <div className="container">
        <div className="image">
          <img src={Notification} alt="title-1" />
          <p className="one">Subscribe to our newsletter</p>
          <p className="two">to stay informed about latest updates</p>
        </div>

        <div className="input">
          <img className="icon" src={BxEnvelope} alt="email" />
          <input
            className="form-input email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <button className="btn" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>

        {message && <p className="message">{message}</p>}
      </div>
    </section>
  )
}

export default Subscribe
