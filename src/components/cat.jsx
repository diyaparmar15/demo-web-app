import React, { useState, useEffect } from 'react';

function CatsPage(){

    const catItems = [
        {
          id: 1,
          name: 'Cat Toys',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/catToy.jpeg",
        },
        {
          id: 2,
          name: 'Cat Food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/catFood.jpeg",
        },
        {
          id: 3,
          name: 'Cat Collar',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/catCollar Small.jpeg",
        },
        {
          id: 4,
          name: 'Cat Bowl',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/catBowls.jpeg",
        },
        {
          id: 5,
          name: 'Cat Sweater',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/catSweater.jpg",
        },
      ];
    
      const handleBuy = (itemId) => {
        // Handle the buy button click for the specific item
        console.log('Buy button clicked for item with ID:', itemId);
      };
    
      return (
        <div>
          <h2>Pet Cat Items</h2>
          <div className="dog-items-container">
            {catItems.map((item) => (
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
export default CatsPage;