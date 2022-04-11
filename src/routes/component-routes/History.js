import React from 'react';

import './History.css';

import { useSelector } from 'react-redux';
import ShowDrawedNumbers from '../../components/draw/ShowDrawedNumbers';

const History = () => {
  const draws = useSelector((state) => state.draws);

  return (
    <div>
      <ShowDrawedNumbers showNumbers={draws.drawedNumbers} />
    </div>
  );
};

export default History;
