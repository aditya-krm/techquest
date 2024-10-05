import React from 'react';

const InterviewPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#0f0c29] to-[#24243e]">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
          🚧 Page Under Development 🚧
        </h1>
        <p className="text-lg text-white/60 mb-6">
          We are working hard to bring you an awesome Interview preparation contents. Stay tuned!
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
          Go Back to Home
        </button>
      </div>
    </div>
  );
}

export default InterviewPage;
