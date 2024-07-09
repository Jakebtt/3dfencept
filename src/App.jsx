import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model as Modela } from './Modela';
import { Model as Modelb } from './Modelb';
import { Model as Modelc } from './Modelc';
import { Model as Modeld } from './Modeld';
import { Model as Modele } from './Modele';
import { Model as Modelf } from './Modelf';
import { Model as Modelg } from './Modelg';
import { Model as Modelh } from './Modelh';
import { Model as Modeli } from './Modeli';
import { Model as Modelj } from './Modelj';
import { Model as Modelk } from './Modelk';
import { Model as Modell } from './Modell';
import { Model as Modeltest } from './Modeltest';
import TextureButton from './TextureButton';
import './styles.css';

const slatSizes = ['1.5inch slat', '2.5inch slat', '4inch slat', '6inch slat', 'test'];
const spacerSizes = ['0.25inch spacing', '0.5inch spacing', '1inch spacing', 'test'];

const modelMapping = {
  '1.5inch slat': {
    '0.25inch spacing': Modela,
    '0.5inch spacing': Modelb,
    '1inch spacing': Modelc,
    "test": Modeltest,
  },
  '2.5inch slat': {
    '0.25inch spacing': Modeld,
    '0.5inch spacing': Modele,
    '1inch spacing': Modelf,
    "test": Modeltest,
  },
  '4inch slat': {
    '0.25inch spacing': Modelg,
    '0.5inch spacing': Modelh,
    '1inch spacing': Modeli,
    "test": Modeltest,
  },
  '6inch slat': {
    '0.25inch spacing': Modelj,
    '0.5inch spacing': Modelk,
    '1inch spacing': Modell,
    "test": Modeltest,
  },

  'test': {
    '0.25inch spacing': Modelj,
    '0.5inch spacing': Modelk,
    '1inch spacing': Modell,
    "test": Modeltest,
  },
};

const categories = [
  'Standard Woodgrains',
  'Non-standard Woodgrains',
  'Solid Colors',
  'Colors of Aus'
];



const textures = [
  // Standard Woodgrains
  { url: '/Atlantic_Cedar.jpg', name: 'Atlantic Cedar', category: 'Standard Woodgrains' },
  { url: '/Blackbutt.jpg', name: 'Blackbutt', category: 'Standard Woodgrains' },
  { url: '/Bush_Cherry.jpg', name: 'Bush Cherry', category: 'Standard Woodgrains' },
  { url: '/Chestnut.jpg', name: 'Chestnut', category: 'Standard Woodgrains' },
  { url: '/Driftwood.jpg', name: 'Driftwood', category: 'Standard Woodgrains' },
  { url: '/Eastern_Mahogany.jpg', name: 'Eastern Mahogany', category: 'Standard Woodgrains' },
  { url: '/Grey_Ash.jpg', name: 'Grey Ash', category: 'Standard Woodgrains' },
  { url: '/Hickory.jpg', name: 'Hickory', category: 'Standard Woodgrains' },
  { url: '/Iroko.jpg', name: 'Iroko', category: 'Standard Woodgrains' },
  { url: '/Knotty_Pine.jpg', name: 'Knotty Pine', category: 'Standard Woodgrains' },
  { url: '/Kwila.jpg', name: 'Kwila', category: 'Standard Woodgrains' },
  { url: '/Light_Oak.jpg', name: 'Light Oak', category: 'Standard Woodgrains' },
  { url: '/Maple_Oak.jpg', name: 'Maple Oak', category: 'Standard Woodgrains' },
  { url: '/Royal_Oak.jpg', name: 'Royal Oak', category: 'Standard Woodgrains' },
  { url: '/Savannah_Oak.jpg', name: 'Savannah Oak', category: 'Standard Woodgrains' },
  { url: '/Spotted_Gum.jpg', name: 'Spotted Gum', category: 'Standard Woodgrains' },
  { url: '/Tassie_Oak.jpg', name: 'Tassie Oak', category: 'Standard Woodgrains' },
  { url: '/Teak_Brown.jpg', name: 'Teak Brown', category: 'Standard Woodgrains' },
  { url: '/White_Ash.jpg', name: 'White Ash', category: 'Standard Woodgrains' },

  // Non-standard Woodgrains
  { url: '/Australian_Cedar.jpg', name: 'Australian Cedar', category: 'Non-standard Woodgrains' },
  { url: '/Black_Ash.jpg', name: 'Black Ash', category: 'Non-standard Woodgrains' },
  { url: '/Black_Walnut.jpg', name: 'Black Walnut', category: 'Non-standard Woodgrains' },
  { url: '/Charcoal_Ash.jpg', name: 'Charcoal Ash', category: 'Non-standard Woodgrains' },
  { url: '/English_Chestnut.jpg', name: 'English Chestnut', category: 'Non-standard Woodgrains' },
  { url: '/Iron_Bark.jpg', name: 'Iron Bark', category: 'Non-standard Woodgrains' },
  { url: '/Koa.jpg', name: 'Koa', category: 'Non-standard Woodgrains' },
  { url: '/Red_Gum.jpg', name: 'Red Gum', category: 'Non-standard Woodgrains' },
  { url: '/Tiger_Wood.jpg', name: 'Tiger Wood', category: 'Non-standard Woodgrains' },
  { url: '/Wenge.jpg', name: 'Wenge', category: 'Non-standard Woodgrains' },

  // Solid Colors
  { url: '/Admiral_Blue.jpg', name: 'Admiral Blue', category: 'Solid Colors' },
  { url: '/Carbon.jpg', name: 'Carbon', category: 'Solid Colors' },
  { url: '/Mistr.jpg', name: 'Mistr', category: 'Solid Colors' },
  { url: '/Midnight_Black.jpg', name: 'Midnight Black', category: 'Solid Colors' },
  { url: '/Sandstone.jpg', name: 'Sandstone', category: 'Solid Colors' },
  { url: '/Slate_Grey.jpg', name: 'Slate Grey', category: 'Solid Colors' },
  { url: '/Smoke.jpg', name: 'Smoke', category: 'Solid Colors' },
  { url: '/White.jpg', name: 'White', category: 'Solid Colors' },
  { url: '/Vapor_Grey.jpg', name: 'Vapor Grey', category: 'Solid Colors' },
  { url: '/Sterling.jpg', name: 'Sterling', category: 'Solid Colors' },

  // Colors of Aus
  { url: '/Aspen.jpg', name: 'Aspen', category: 'Colors of Aus' },
  { url: '/Black_Cedar.jpg', name: 'Black Cedar', category: 'Colors of Aus' },
  { url: '/French_Walnut.jpg', name: 'French Walnut', category: 'Colors of Aus' },
  { url: '/Hamptons_Cedar.jpg', name: 'Hamptons Cedar', category: 'Colors of Aus' },
  { url: '/Hinoki.jpg', name: 'Hinoki', category: 'Colors of Aus' },
  { url: '/Nordic_Oak.jpg', name: 'Nordic Oak', category: 'Colors of Aus' },
  { url: '/Norwegian_Beech.jpg', name: 'Norwegian Beech', category: 'Colors of Aus' },
  { url: '/Pacific_Teak.jpg', name: 'Pacific Teak', category: 'Colors of Aus' },
  { url: '/Queensland_Walnut.jpg', name: 'Queensland Walnut', category: 'Colors of Aus' },
  { url: '/Red_Wood.jpg', name: 'Red Wood', category: 'Colors of Aus' },
  { url: '/Shou_Sugi_Ban.jpg', name: 'Shou Sugi Ban', category: 'Colors of Aus' },
  { url: '/Silver_Wattle.jpg', name: 'Silver Wattle', category: 'Colors of Aus' },
  { url: '/Spruce.jpg', name: 'Spruce', category: 'Colors of Aus' },
  { url: '/Sycamore.jpg', name: 'Sycamore', category: 'Colors of Aus' },
  { url: '/White_Ash.jpg', name: 'White Ash', category: 'Colors of Aus' }
];

const App = () => {
  const [textureUrl, setTextureUrl] = useState(textures[0].url);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSlatSize, setSelectedSlatSize] = useState(slatSizes[0]);
  const [selectedSpacerSize, setSelectedSpacerSize] = useState(spacerSizes[0]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSlatSizeChange = (event) => {
    setSelectedSlatSize(event.target.value);
  };

  const handleSpacerSizeChange = (event) => {
    setSelectedSpacerSize(event.target.value);
  };

  const filteredTextures = textures.filter(texture => texture.category === selectedCategory);
  const ModelComponent = modelMapping[selectedSlatSize][selectedSpacerSize];


  return (
    <div className="container">
      <img src="Alumarch.jpg" alt="Logo" className="logo" />
      <select className="category-dropdown" onChange={handleCategoryChange} value={selectedCategory}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
        </select>
      <select className="slat-size-dropdown" onChange={handleSlatSizeChange} value={selectedSlatSize}>
        {slatSizes.map(size => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>
      <select className="spacer-size-dropdown" onChange={handleSpacerSizeChange} value={selectedSpacerSize}>
        {spacerSizes.map(size => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>
      <div className={`button-container ${selectedCategory === 'Standard Woodgrains' ? 'button-container-standard' : ''}`}>
        {filteredTextures.map((texture, index) => (
          <TextureButton
            key={index}
            textureUrl={texture.url}
            colorName={texture.name}
            onClick={() => setTextureUrl(texture.url)}
          />
        ))}
      </div>
      <div className="canvas-container">
        <Canvas camera={{ fov: 70, position: [0, 0, 5] }}>
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 10]} />
          <ModelComponent textureUrl={textureUrl} />
        </Canvas>
      </div>
    </div>
  );
};

export default App;





