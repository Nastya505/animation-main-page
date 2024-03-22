import React, { useState, useEffect } from 'react';

const Theme = () => {
  const savedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(savedDarkMode ? JSON.parse(savedDarkMode) : false);

  const handleChange = (event) => {
    const newDarkMode = event.target.checked;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div>
      <label>
        Dark Mode:
        <input type="checkbox" checked={darkMode} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Theme;