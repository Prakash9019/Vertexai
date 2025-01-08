import React, { useState } from 'react';
import axios from 'axios';

const PitchAnalysis = () => {
  const [sections, setSections] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/pitch/create', { sections });
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error(error);
      alert('Error analyzing pitch deck');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold text-white mb-6">Analyze Your Pitch Deck</h2>
      <textarea
        placeholder="Paste pitch content here"
        onChange={(e) => setSections([{ name: 'Content', content: e.target.value }])}
        className="w-full max-w-lg p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        rows="8"
      ></textarea>
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        Analyze
      </button>
      {feedback && (
        <div className="mt-8 w-full max-w-lg bg-white p-6 rounded-md shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Feedback</h3>
          <p className="text-gray-700">{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default PitchAnalysis;
