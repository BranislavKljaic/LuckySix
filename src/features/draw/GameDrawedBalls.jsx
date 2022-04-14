import React from 'react';

import { ballColor } from '../../functions/Helpers';
import './GameDrawedBalls.css';
import '../../shared/BallColors.css';

function GameDrawedBalls(props) {
  return (
    <div className="balls">
      {props.drawedNumbers.map((ball) => (
        <div className={`one-ball ${ballColor(ball)}`} key={ball}>
          {ball}
        </div>
      ))}
    </div>
  );
}

export default GameDrawedBalls;
