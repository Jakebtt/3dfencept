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
          <div onClick={() => handleSelect('Woodgrain')} id="woodgrain" name="woodgrain">Woodgrain</div>
          <div onClick={() => handleSelect('Solid Colors')} id="solid-colors" name="solid-colors">Solid Colors</div>
          <div onClick={() => handleSelect('Colors of Australia')} id="colors-of-australia" name="colors-of-australia">Colors of Australia</div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
