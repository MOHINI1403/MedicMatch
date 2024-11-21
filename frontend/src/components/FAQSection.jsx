import React, { useState } from "react";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  const faqs = [
    {
      question: "What is MedicMatch?",
      answer:
        "MedicMatch is a platform for booking doctor appointments, managing medical records, and streamlining healthcare access.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "To book an appointment, choose your doctor by specialty, select a time slot, and make a payment for a hassle-free experience.",
    },
    {
      question: "Is online payment secure?",
      answer:
        "Yes, online payments on MedicMatch are fully secure and encrypted to ensure the safety of your transactions.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-16 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800 focus:outline-none"
            >
              {faq.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform transition-transform ${
                  openQuestion === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openQuestion === index && (
              <div className="mt-2 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
