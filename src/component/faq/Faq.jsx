import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import faq from "../../assets/faq.svg";

const FAQ = () => {
  const faqs = [
    {
      question: "What is M2 Square?",
      answer:
        "M2 Square is a digital real estate investment platform that allows you to own shares of high-yield properties without the need for large upfront capital or complex paperwork.",
    },
    {
      question: "How does it work?",
      answer: "You can invest in fractional shares of properties via our platform. Returns are distributed based on ownership percentage.",
    },
    {
      question: "What is the minimum investment amount?",
      answer: "The minimum investment amount is $1,000, making it accessible for most investors.",
    },
    {
      question: "How do I receive my rental income?",
      answer: "Rental income is distributed quarterly directly to your bank account or digital wallet.",
    },
    {
      question: "Is my investment secure?",
      answer: "Investments are legally backed by property assets and regulated by financial authorities.",
    },
    {
      question: "What documents are required?",
      answer: "You will need a valid ID, proof of address, and bank account details to start investing.",
    },
  ];

  return (
    <div
      className="text-center overflow-hidden bg-light px-4"
      style={{ minHeight: "769px" }}
    >
      {/* Heading */}
      <div
        className="text-center my-4"
        style={{ left: "370px", top: "50px" }}
      >
        <span
          style={{
            color: "#0F7B6C",
            fontSize: "48px",
            fontFamily: "Montserrat",
            fontWeight: 600,
          }}
        >
          Frequently{" "}
        </span>
        <span
          style={{
            color: "#111827",
            fontSize: "48px",
            fontFamily: "Montserrat",
            fontWeight: 600,
          }}
        >
          Asked Questions
        </span>
      </div>



      <div className="row">
        <div className="col-5 d-flex justify-content-center align-items-center">
          <img
            src={faq}
            alt="FAQ Decorative"

          />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center gap-4">
          {/* FAQ Accordion */}
          <div

          >
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item mb-3 rounded-3">
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "black",
                      }}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div
                      className="accordion-body"
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "black",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default FAQ;
