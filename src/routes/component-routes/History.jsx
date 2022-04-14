import React, { useEffect, useState } from 'react';

import './History.css';

import { useSelector } from 'react-redux';
import ShowDrawedNumbers from '../../features/draw/ShowDrawedNumbers';
import CustomDropDown from '../../components/dropdown/CustomDropDown';
import ShowPlayedTickets from '../../features/draw/ShowPlayedTickets';

const History = () => {
  const [selectedHistoryOption, setSelectedHistoryOption] = useState();
  const [selectedHistoryNumberOfDraw, setSelectedHistoryNumberOfDraw] =
    useState();
  const [numbersOfDrawal, setNumbersOfDrawal] = useState([]);
  const draws = useSelector((state) => state.draws);
  const tickets = useSelector((state) => state.tickets);
  const counter = useSelector((state) => state.counter);

  useEffect(() => {
    for (let i = 1; i <= counter.counter; i += 1) {
      setNumbersOfDrawal((old) => [...old, i]);
    }
  }, []);

  return (
    <div>
      <div>
        <CustomDropDown
          valueList={['Tickets', 'Drawal']}
          setValue={setSelectedHistoryOption}
          label="Type"
        />
      </div>
      <div>
        <CustomDropDown
          valueList={numbersOfDrawal}
          setValue={setSelectedHistoryNumberOfDraw}
          label="Drawal"
        />
      </div>
      <div>
        <ShowDrawedNumbers
          showNumbers={draws.drawedNumbers}
          numberOfDrawal={selectedHistoryNumberOfDraw}
          typeOfDrawal={selectedHistoryOption}
        />
      </div>
      <ShowPlayedTickets
        showTickets={tickets.tickets}
        numberOfDrawal={selectedHistoryNumberOfDraw}
        typeOfDrawal={selectedHistoryOption}
      />
    </div>
  );
};

export default History;
