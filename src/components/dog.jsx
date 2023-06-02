import React, { useState, useEffect } from 'react';

function DogsPage(){

    const dogItems = [
        {
          id: 1,
          name: 'Dog Collar',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/dogCollar.jpeg",
        },
        {
          id: 2,
          name: 'Dog Bed',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/dogBed.jpeg",
        },
        {
          id: 3,
          name: 'Dog Chew Treats',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/dogTreat.jpeg",
        },
        {
          id: 4,
          name: 'Dog Toy',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/dogToy.jpeg",
        },
        {
          id: 5,
          name: 'Dog Food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          image: "images/dogFood.png",
        },
      ];
    
      const handleBuy = (itemId) => {
        // Handle the buy button click for the specific item
        console.log('Buy button clicked for item with ID:', itemId);
      };
    
      return (
        <div>
          <h2>Pet Dog Items</h2>
          <div className="dog-items-container">
            {dogItems.map((item) => (
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

export default DogsPage;