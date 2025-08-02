import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('About');

  const options = ['Men', 'Women', 'Kids', 'Accessories'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        {selected}
        <spa className="arrow">{isOpen ? '▲' : '▼'}</spa>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
