import React, { useState, useEffect } from 'react';
import Arrow1 from "../assets/images/arrow-1.svg";
import Arrow2 from "../assets/images/arrow-2.svg";

const Questions2 = () => {
  const [openQuestion, setOpenQuestion] = useState(null); // Track which question is open
  const [faqs, setFaqs] = useState([]); // State to store FAQ data

  // Fetch FAQ data from the API
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        if (response.ok) {
          const data = await response.json();
          setFaqs(data); // Store fetched FAQs in state
        } else {
          console.error('Failed to fetch FAQs');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchFaqs();
  }, []);

  // Toggle question visibility
  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section id="questions-2">
      <div className="container">
        {faqs.map((faq) => (
          <div key={faq.id} className={`questions-box ${openQuestion === faq.id ? 'active' : ''}`}>
            <h1 onClick={() => toggleQuestion(faq.id)}>
              {faq.title}
            </h1>
            {openQuestion === faq.id && (
              <p>{faq.content}</p>
            )}
            <div className="carousel" onClick={() => toggleQuestion(faq.id)}>
              <img src={openQuestion === faq.id ? Arrow2 : Arrow1} alt="arrow toggle" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions2;
