import React, { useState } from 'react';
import QuizBox from './QuizBox';

const QuizPage = () => {
  const [selectedTheme, setSelectedTheme] = useState('général');

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  return (
    <div>
      <h1>Choisissez un thème</h1>
      <select onChange={handleThemeChange} value={selectedTheme}>
        <option value="général">Général</option>
        <option value="uiux">UI/UX Design</option>
        {/* Ajoutez d'autres options de thème ici */}
      </select>
      <QuizBox theme={selectedTheme} />
    </div>
  );
};

export default QuizPage;
