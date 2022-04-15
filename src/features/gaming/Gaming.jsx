/*
  Component which shows when Game start, it shows counter first, which is initialy
  5 then when is comes to 0 it start to show numbers from drawal
*/

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterSliceActions } from '../../store/counter-slice';
import { drawingSliceActions } from '../../store/drawing-slice';
import ShowCounter from './ShowCounter';
import DrawalGame from '../draw/DrawalGame';

const Countdown = () => {
  const dispatch = useDispatch();
  const draws = useSelector((state) => state.draws);
  const counter = useSelector((state) => state.counter);
  const [numsArray, setNumsArray] = useState([]);
  const [flag, setFlag] = useState(false);
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1);
      if (countDown === 0) {
        if (!flag) {
          const { drawedNumbers } = draws;
          setNumsArray([...drawedNumbers[counter.counter].numbers]);
          dispatch(counterSliceActions.increment());
        }
        setFlag(true);
        setCountDown(5);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  useEffect(() => {
    dispatch(drawingSliceActions.drawNumbers());
  }, []);

  return (
    <div>
      {!flag ? (
        <ShowCounter counter={countDown} />
      ) : (
        <div>
          <DrawalGame array={numsArray} counter={counter.counter} />
        </div>
      )}
    </div>
  );
};

export default Countdown;
