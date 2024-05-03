import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);

    // Split text into words
    const words = inputText.split(/\s+/);

    // Find misspelled word
    const misspelledWord = words.find(word => customDictionary[word.toLowerCase()]);

    // If misspelled word found, suggest correction
    if (misspelledWord) {
      const correction = customDictionary[misspelledWord.toLowerCase()];
      setCorrection(`Did you mean: ${correction}?`);
    } else {
      setCorrection('');
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter your text here..."
      />
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
