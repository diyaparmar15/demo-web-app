import React, { useState, useEffect } from 'react';

function BirdPage(){

    const birdItems = [
        {
          id: 1,
          name: 'Bird Cage',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/birdCage.jpg",
        },
        {
          id: 2,
          name: 'Bird Food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/birdFood.jpeg",
        },
        {
          id: 3,
          name: 'Bird Toys',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/birdToys.jpeg",
        },
      ];
    
      const handleBuy = (itemId) => {
        // Handle the buy button click for the specific item
        console.log('Buy button clicked for item with ID:', itemId);
      };
    
      return (
        <div>
          <h2>Pet Bird Items</h2>
          <div className="dog-items-container">
            {birdItems.map((item) => (
              <div key={item.id} className="dog-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button onClick={() => handleBuy(item.id)}>View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    
}

export default BirdPage;