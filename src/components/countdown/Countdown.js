import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterSliceActions } from '../../store/counter-slice';
import { drawingSliceActions } from '../../store/drawing-slice';
import ShowCounter from './ShowCounter';
import DrawalGame from '../draw/DrawalGame';
import { CustomButton } from '../buttons/CustomButton';

const Countdown = () => {
  const dispatch = useDispatch();
  const draws = useSelector((state) => state.draws);
  const counter = useSelector((state) => state.counter);
  const [numsArray, setNumsArray] = useState([]);
  const [flag, setFlag] = useState(true);
  const [countDown, setCountDown] = useState(10);

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
        setCountDown(10);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  useEffect(() => {
    dispatch(drawingSliceActions.drawNumbers());
  }, [numsArray]);

  return (
    <div>
      <CustomButton
        type="submit"
        onClick={() => {
          setFlag(false);
          setCountDown(10);
        }}
      >
        Start drawal
      </CustomButton>
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
