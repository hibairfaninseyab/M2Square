import React, { useState } from "react";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "What is fractional real estate investment?",
            answer: "Fractional investment allows you to purchase micro-shares of premium real estate, proportional to investment."
        },
        {
            question: "How does tracking data work for users?",
            answer: "Our data points pull up-to-date transparent market metrics and history datasets updated hourly."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-layout">
            <div className="faq-graphic">
              <div className="blob-avatar" style={{fontSize: "44px", fontWeight: "800"}}>?</div>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    {faq.question} <i className="fa-solid fa-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

export default Faq;
