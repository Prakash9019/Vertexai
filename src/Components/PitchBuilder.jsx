import React, { useState } from 'react';
import axios from 'axios';

const PitchBuilder = () => {
  const [title, setTitle] = useState('');
  const [sections, setSections] = useState([
    { name: 'Problem Statement', content: '' },
    { name: 'Solution', content: '' },
    { name: 'Market Opportunity', content: '' },
  ]);

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const handleSubmit = async () => {
    try {
      console.log({ title, sections });
      const response = await axios.post('http://localhost:5000/api/pitch/create', { title, sections });
      alert('Pitch Deck Created Successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating pitch deck');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold text-white mb-6">Create Your Pitch Deck</h2>
      <input
        type="text"
        placeholder="Pitch Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 p-3 w-full max-w-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {sections.map((section, index) => (
        <div key={index} className="mb-4 w-full max-w-lg">
          <h4 className="text-2xl font-semibold text-white mb-2">{section.name}</h4>
          <textarea
            value={section.content}
            onChange={(e) => handleSectionChange(index, 'content', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          />
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Submit
      </button>
    </div>
  );
};

export default PitchBuilder;
