// DropdownMenu.jsx
import React, { useState } from 'react';

const DropdownMenu = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    onSelect(category);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
        {selectedCategory}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div onClick={() => handleSelect('Woodgrain')}>Woodgrain</div>
          <div onClick={() => handleSelect('Solid Colors')}>Solid Colors</div>
          <div onClick={() => handleSelect('Colors of Australia')}>Colors of Australia</div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
