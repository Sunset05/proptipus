import React from "react";
import tempImg from "../../images/SadFish.jpeg"

function TentacleThree({ fishGiOhCard }){
    
    return (
      <div className="tentacle-three">
      <span className="fish-name">
          {fishGiOhCard.name}
        </span>

        <img alt="fish" className="fish-image" 
        src={fishGiOhCard.image} 
        />

        <span className="fish-type">
          {fishGiOhCard.type}
        </span>

        <span className="fish-description">
          {fishGiOhCard.description}
        </span>

        <span className="fish-attack">
          {fishGiOhCard.attack}
        </span>
      </div>
    );
}

export default TentacleThree;
