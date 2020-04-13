import React from 'react';
import card from '../cardData';
import Card from './Card'
import '../App.css';

function App() {
  return (
    <div className="App">
      <Card 
      name={card.name}
      url={card.url}
      headline={card.headline}
      message={card.message}
      />
    </div>
  );
}

export default App;
