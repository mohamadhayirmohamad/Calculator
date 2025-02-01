// let runningTotal = 0;
// let buffer = "0";
// let previousOperator;

// const screen = document.querySelector(".screen");

// function buttonClick(value) {
//   if (isNaN(value)) {
//     handleSymbol(value);
//   } else {
//     handleNumber(value);
//   }
//   screen.innerText = buffer;
// }

// function handleSymbol(symbol) {
//   switch (symbol) {
//     case "C":
//       buffer = "0";
//       runningTotal = 0;
//       break;
//     case "=":
//       if (previousOperator === null) {
//         return;
//       }
//       flushOperation(parseInt(buffer));
//       previousOperator = null;
//       buffer = runningTotal;
//       runningTotal = 0;
//       break;
//     case '←':
//       if (buffer.length ===1) {
//         buffer = '0';
//       } else {
//         buffer = buffer.substring(0, buffer.
//             length - 1);
//       }
//       break;
//     case '+':
//     case '-':
//     case '×':
//     case '÷':
//       handleMath(symbol);
//       break;
//   }
// }

// function handleMath(symbol) {
//   if (buffer === "0") {
//     return;
//   }

//   const intBuffer = parseInt(buffer);

//   if (runningTotal === 0) {
//     runningTotal = intBuffer;
//   } else {
//     flushOperation(intBuffer);
//   }
//   previousOperator = symbol;
//   buffer = '0';
// }

// function flushOperation(intBuffer) {
//   if (previousOperator === '+' ) {
//     runningTotal += intBuffer;
//   } else if (previousOperator === '-') {
//     runningTotal  -= intBuffer;
//   } else if (previousOperator === '×') {
//     runningTotal *= intBuffer;
//   } else if (previousOperator === '÷') {
//     runningTotal /= intBuffer;
//   }
// }

// function handleNumber(numberString) {
//   if (buffer === "0") {
//     buffer = numberString;
//   } else{
//     buffer += numberString;
//   }
// }

// function init() {
//   document
//     .querySelector(".calc-buttons")
//     .addEventListener("click", function (event) {
//       buttonClick(event.target.innerText);
//     });
// }

// init();











let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  // تصحيح الرموز القادمة من HTML Entities
  if (symbol === "−") symbol = "-";
  if (symbol === "×") symbol = "*";
  if (symbol === "÷") symbol = "/";
  if (symbol === "+") symbol = "+";

  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      previousOperator = null;
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal.toString();
      runningTotal = 0;
      break;
    case "←":
      buffer = buffer.length === 1 ? "0" : buffer.slice(0, -1);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

function flushOperation(intBuffer) {
  console.log("Previous Operator:", previousOperator);

  switch (previousOperator) {
    case "+":
      runningTotal += intBuffer;
      break;
    case "-":
      runningTotal -= intBuffer;
      break;
    case "*":
      runningTotal *= intBuffer;
      break;
    case "/":
      runningTotal /= intBuffer;
      break;
    default:
      console.log("Unknown operator:", previousOperator);
  }
}

function handleNumber(numberString) {
  buffer = buffer === "0" ? numberString : buffer + numberString;
}

function init() {
  document.querySelector(".calc-buttons").addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });
}

init();











