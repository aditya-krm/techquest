import React from 'react';

const QuizPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
          🚧 Page Under Development 🚧
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          We are working hard to bring you an awesome quiz experience. Stay tuned!
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
          Go Back to Home
        </button>
      </div>
    </div>
  );
}

export default QuizPage;
