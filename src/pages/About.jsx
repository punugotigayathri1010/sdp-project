import React, { useState } from "react";

const About = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-indigo-300 p-10 text-center">
      
      {/* Card Container */}
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          About Expense Tracking System
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-6">
          The Expense Tracking & Visualization System helps users record,
          monitor, and analyze their daily income and expenses.
        </p>

        {/* Button */}
        <button
          onClick={() => setShowMessage(!showMessage)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold 
          hover:bg-indigo-700 transition duration-300 shadow-md active:scale-95"
        >
          {showMessage ? "Close" : "Learn More"}
        </button>

        {/* Message Box */}
        {showMessage && (
          <div className="mt-6 p-6 bg-indigo-50 rounded-xl border border-indigo-200 shadow-inner animate-fadeIn">
            
            <p className="text-gray-700 mb-4">
              It provides clear charts and summaries to understand spending
              patterns and manage budgets effectively.
            </p>

            <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
              <li>Add and manage expenses</li>
              <li>Categorize transactions</li>
              <li>View visual reports</li>
              <li>Track monthly budgets</li>
            </ul>

          </div>
        )}

      </div>
    </div>
  );
};

export default About;