import React from 'react';

function SimpsoneUniverse({ simpsone }) {
  return (
    <div className="DisplayEmployee">
      <img
        src={simpsone.image}
        alt={simpsone.character}
      />
      <ul>
        
        <li>
          Name: {simpsone.character}
        </li>
        <li>
          quote: {simpsone.quote}
         
        </li>
      </ul>
    </div>
  );
};

export default SimpsoneUniverse;