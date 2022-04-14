import Draw from './objects/Draw';
import Ticket from './objects/Ticket';

// Total number of possible balls drawed
const BALL_COUNT = 48;
// Total number of possible balls drawed per one drawal
const NUMBER_OF_DRAWED_BALLS = 35;
// Total number of balls per one ticket
const NUMBER_OF_BALLS_PER_TICKET = 6;
// Setting number of balls per row
const ROW_DIVIDER = 8;
const COLUMN_DIVIDER = 6;

// Generate array of numbers from 1 to value specified by global variable BALL_COUNT
const arrayOfAllNumbers = () => {
  let i = 0;
  const allNumbers = [];
  while (i < BALL_COUNT) {
    allNumbers[i] = i + 1;
    i += 1;
  }

  return allNumbers;
};

// Generating random ID of ticket with 10 numbers
const generateTicketId = () => {
  let id = '';
  const idNumbers = '0123456789';

  for (let i = 0; i < 10; i += 1) {
    id += idNumbers.charAt(Math.floor(Math.random() * idNumbers.length));
  }
  return id;
};

// Generate win amounts for every field on board
// Function not implemented
const generateWinAmounts = () => {
  let winAmounts = [];
  winAmounts = [
    10000, 5000, 2500, 1500, 1000, 500, 400, 300, 200, 150, 100, 90, 80, 70, 60,
    50, 40, 30, 20, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
  ];
  return winAmounts;
};

// Generate random jackpot code
const generateJackpotCode = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Math.random().toString(26).substring(2, 7).toUpperCase();

// Generating ticket with its values
const generateNewTicket = (drawalNumber) => {
  let i = 0;
  const ticket = new Ticket();
  ticket.id = generateTicketId();
  ticket.jackpotCode = generateJackpotCode();
  ticket.numberOfDraw = drawalNumber;
  // const ticket = {
  //   id: generateTicketId(),
  //   balls: [],
  //   win: false,
  //   jackpotCode: generateJackpotCode(),
  //   bet: 1,
  //   numberOfDraw: drawalNumber,
  // };

  do {
    const num = Math.floor(Math.random() * (BALL_COUNT + 1 - 1)) + 1;
    if (!ticket.balls.includes(num)) {
      ticket.balls[i] = num;
      i += 1;
    }
  } while (i < NUMBER_OF_BALLS_PER_TICKET);

  ticket.balls = ticket.balls.sort((a, b) => a - b);

  return ticket;
};

// Generating 35 random numbers and jackpot code for drawing
const generatingNewDrawal = () => {
  const newDrawal = new Draw();

  newDrawal.jackpotCode = generateJackpotCode();
  newDrawal.winAmounts = generateWinAmounts();
  let i = 0;

  do {
    const num = Math.floor(Math.random() * (BALL_COUNT + 1 - 1)) + 1;
    if (!newDrawal.numbers.includes(num)) {
      newDrawal.numbers[i] = num;
      i += 1;
    }
  } while (i < NUMBER_OF_DRAWED_BALLS);

  return newDrawal;
};

// Checking if ticket numbers are contained in draw numbers
function checkIsWin(ticket, arrayOfNumbers) {
  const tempArray = [];
  let o = 0;
  for (let k = 0; k < ticket.length; k += 1) {
    for (let l = 0; l < arrayOfNumbers.length; l += 1) {
      if (ticket[k] === arrayOfNumbers[l].value) {
        tempArray.push(l);
        o += 1;
      }
      if (o === 6) {
        // console.log(Math.max.apply(null, tempArray));
        return Math.max.apply(null, tempArray);
      }
    }
  }
  return false;
}

// Setting ball colors on UI
const ballColor = (num) => {
  const colorNumber = (BALL_COUNT + num) % ROW_DIVIDER;
  switch (colorNumber) {
    case 0:
      return 'black';
    case 1:
      return 'red';
    case 2:
      return 'green';
    case 3:
      return 'blue';
    case 4:
      return 'pink';
    case 5:
      return 'brown';
    case 6:
      return 'yellow';
    case 7:
      return 'orange';
    default:
      return '';
  }
};

export {
  generateNewTicket,
  generateTicketId,
  generatingNewDrawal,
  generateWinAmounts,
  checkIsWin,
  ballColor,
  generateJackpotCode,
  arrayOfAllNumbers,
  NUMBER_OF_BALLS_PER_TICKET,
  BALL_COUNT,
  NUMBER_OF_DRAWED_BALLS,
  ROW_DIVIDER,
  COLUMN_DIVIDER,
};
