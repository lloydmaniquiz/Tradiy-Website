import React, { useState } from "react";
import "../App.css";

const Questions = () => {
  // Create an array of questions with their respective answers
  const questionsData = [
    { question: "What is Tradiy?", answer: "Tradiy is an online directory connecting homeowners in Scotland with verified tradespeople. It’s designed to make finding trusted professionals for home projects quick, simple, and stress-free." },
    { question: "How does Tradiy ensure tradespeople are reliable?", answer: "All tradespeople listed on Tradiy are personally vetted by our team. They must provide valid ID, public liability insurance, and relevant certifications to be verified." },
    { question: "Is Tradiy free to use?", answer: "Yes, Tradiy is free for homeowners to browse and contact tradespeople. Tradespeople can currently sign up and get verified for free as well." },
    { question: "How do I search for tradespeople on Tradiy?", answer: "You can search the directory by trade and location. For example, enter “electrician in Glasgow” or “plumber in Ayrshire” to find professionals near you." },
    { question: "Can homeowners leave reviews?", answer: "Currently, our team personally vets all tradespeople. In the future, homeowners will be able to leave reviews to further help others make informed decisions." }
  ];

  // State to track which questions are open
  const [openIndexes, setOpenIndexes] = useState([]);  // Track an array of open indices

  // Toggle the visibility of the answer for a specific question
  const toggleDropdown = (index) => {
    setOpenIndexes((prevIndexes) => {
      // If the question is already open, close it (remove index from openIndexes)
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter(i => i !== index);
      }
      // Otherwise, open the question (add index to openIndexes)
      return [...prevIndexes, index];
    });
  };

  return (
    <div className="faqs">
      <h3>Got more questions? Let’s get them answered!</h3>
      <h1>Frequently Asked Questions</h1>
      {questionsData.map((item, index) => (
        <div key={index} className="faq-container">  {/* Added container class */}
          <h2 
            onClick={() => toggleDropdown(index)} 
            style={{ cursor: "pointer" }}
          >
            {item.question}
          </h2>
          
          {openIndexes.includes(index) && (
            <p>{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
