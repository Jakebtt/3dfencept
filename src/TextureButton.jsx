import React from 'react';

const TextureButton = ({ textureUrl, colorName, onClick }) => {
  return (
    <button onClick={onClick} style={{ border: 'none', background: 'transparent', cursor: 'pointer', margin: '10px' }}>
      <div style={{ width: '50px', height: '50px', backgroundImage: `url(${textureUrl})`, backgroundSize: 'cover' }}></div>
      <div className="color-name-container">
        <div className="color-name">{colorName}</div>
      </div>
    </button>
  );
};

export default TextureButton;

