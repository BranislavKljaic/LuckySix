// Generating random ID of ticket with 10 numbers
const generateTicketId = () => {
  let id = '';
  const idNumbers = '0123456789';

  for (let i = 0; i < 10; i += 1) {
    id += idNumbers.charAt(Math.floor(Math.random() * idNumbers.length));
  }
  return id;
};

function generateWinAmounts() {
  return [
    10000, 7500, 5000, 2500, 1500, 1000, 500, 450, 400, 350, 300, 250, 200, 150,
    100, 90, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
  ];
}

// Generate random jackpot code
const generateJackpotCode = () => Math.random().toString(26).substring(2, 7).toUpperCase();

// Generating ticket with its values
const generateTicket = (drawalNumber) => {
  let i = 0;
  const ticket = {
    id: generateTicketId(),
    numbers: [],
    win: false,
    jackpotCode: generateJackpotCode(),
    bet: 1,
    numberOfDraw: drawalNumber,
  };
  do {
    const num = Math.floor(Math.random() * (49 - 1)) + 1;
    if (!ticket.numbers.includes(num)) {
      ticket.numbers[i] = num;
      i += 1;
    }
  } while (i < 6);

  ticket.numbers = ticket.numbers.sort((a, b) => a - b);

  return ticket;
};

// Generating 35 random numbers and jackpot code for drawing
const numbers = () => {
  let i = 0;
  const drawedNumbers = {
    jackpotCode: '',
    numbers: [],
    winAmounts: generateWinAmounts(),
  };
  do {
    const num = Math.floor(Math.random() * (49 - 1)) + 1;
    if (!drawedNumbers.numbers.includes(num)) {
      drawedNumbers.numbers[i] = num;
      i += 1;
    }
  } while (i < 35);

  drawedNumbers.jackpotCode = Math.random()
    .toString(26)
    .substring(2, 7)
    .toUpperCase();

  return drawedNumbers;
};

// Checking if ticket numbers are contained in draw numbers
function checkIsWin(ticket, arrayOfNumbers) {
  let o = 0;
  for (let k = 0; k < ticket.length; k += 1) {
    for (let l = 0; l < arrayOfNumbers.length; l += 1) {
      if (ticket[k] === arrayOfNumbers[l]) o += 1;
      if (o === 6) {
        return true;
      }
    }
  }
  return false;
}

// Setting ball colors on UI
const ballColor = (num) => {
  if (
    num === 1 ||
    num === 9 ||
    num === 17 ||
    num === 25 ||
    num === 33 ||
    num === 41
  )
    return 'red';
  if (
    num === 2 ||
    num === 10 ||
    num === 18 ||
    num === 26 ||
    num === 34 ||
    num === 42
  )
    return 'green';
  if (
    num === 3 ||
    num === 11 ||
    num === 19 ||
    num === 27 ||
    num === 35 ||
    num === 43
  )
    return 'blue';
  if (
    num === 4 ||
    num === 12 ||
    num === 20 ||
    num === 28 ||
    num === 36 ||
    num === 44
  )
    return 'pink';
  if (
    num === 5 ||
    num === 13 ||
    num === 21 ||
    num === 29 ||
    num === 37 ||
    num === 45
  )
    return 'brown';
  if (
    num === 6 ||
    num === 14 ||
    num === 22 ||
    num === 30 ||
    num === 38 ||
    num === 46
  )
    return 'yellow';
  if (
    num === 7 ||
    num === 15 ||
    num === 23 ||
    num === 31 ||
    num === 39 ||
    num === 47
  )
    return 'orange';
  if (
    num === 8 ||
    num === 16 ||
    num === 24 ||
    num === 32 ||
    num === 40 ||
    num === 48
  )
    return 'black';
  return '';
};

const allNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48,
];

export {
  generateTicket,
  generateTicketId,
  numbers,
  checkIsWin,
  ballColor,
  generateJackpotCode,
  allNumbers,
};
