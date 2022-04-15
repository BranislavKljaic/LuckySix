/*
  Component for showing history of drawed numbers by chosing Drawal in dropdown menu and
  specified number of drawal in another dropdown menu
*/

import React from 'react';
import Ball from '../ticket/Ball';

import './ShowDrawedNumbers.css';

const ShowDrawedNumbers = (props) => {
  const { numberOfDrawal, typeOfDrawal } = props;

  return (
    <div className="drawal">
      {props.showNumbers.map((element) => (
        ((numberOfDrawal === element.numberOfDrawing) && (typeOfDrawal === 'Drawal')) ? (
          <div
            className="one-drawal"
            id={element.numberOfDrawing}
            key={element.numberOfDrawing}
          >
            <div className="one-drawal-numbers">
              <div className="one-drawal-infos">
                Number of drawing:
                {element.numberOfDrawing}
              </div>
              {element.numbers.map((num) => (
                <div className="one-drawal-number">
                  <Ball number={num} />
                </div>
              ))}
              <div className="one-drawal-infos">
                Jackpot code:
                {element.jackpotCode}
              </div>
            </div>
          </div>
        ) : (
          <div />
        )
      ))}
    </div>
  );
};

export default ShowDrawedNumbers;
