// var displayElement = document.getElementById('displayRow');
// var value = 0, value2 = 0;
// displayElement.innerHTML = 0;
// var operator = '';

// function storeOperator(op) {
//   if (op != '=') {
//     operator = op;
//     value2 = value;
//     value = 0;
//   }
// }

// function positiveNegative() {
//   value = value * -1;
//   displayElement.innerHTML = value.toString();
// }

// function clearCalc() {
//   value = 0;
//   displayElement.innerHTML = value.toString();
//   operator = '';
// }

// function compute() {
//   if (operator == '+') {
//     value = value2 + value;
//   } else if (operator == '-') {
//     value = value2 - value;
//   } else if (operator == 'x') {
//     value = value2 * value;
//   } else if (operator == '/') {
//     value = value2 / value;
//   }
//   operator = '';
//   displayElement.innerHTML = value.toString();
// }

// function pressDecimalPoint() {
//   if (Number.isInteger(value)) {
//     valueString = value.toString(); 
//     valueString = `${valueString}.`;
//     value = parseFloat(valueString).toFixed(1);
//   }
//   displayElement.innerHTML = valueString;
// }

// function pressNumber(buttonValue) {
//   valueString = value.toString(); 
//   if (valueString == '0') {
//     valueString = buttonValue.toString(); 
//     value = buttonValue; 
//   } else {
//     // check if it has a decimal point or none
//     if (Number.isInteger(value)) {
//       // no decimal point
//       valueString = valueString + buttonValue.toString(); 
//       value = parseInt(valueString);
//     } else {
//       // it has decimal point
//       var decimalToString = value.toString();
//       value = parseFloat(value);
//       var decimalPlace = decimalToString.indexOf('.');
//       var decimalCount = decimalToString.length - decimalPlace - 1;
//       if (decimalCount == 1 && decimalToString[decimalToString.length-1] == '0') {
//         var newDecimalValue = buttonValue / (10 ** decimalCount); 
//       } else {
//         var newDecimalValue = buttonValue / (10 ** (decimalCount + 1));
//       }
//       value = value + newDecimalValue; 
//       valueString = value.toString(); 
//     }

//   }
//   displayElement.innerHTML = valueString;
// }

var displayElement = document.getElementById('displayRow');
var value = 0, value2 = 0;
displayElement.innerHTML = '0';
var operator = '';

function storeOperator(op) {
  if (op !== '=') {
    operator = op;
    value2 = value;
    value = 0;
  }
}

function positiveNegative() {
  value = value * -1;
  updateDisplay();
}

function clearCalc() {
  value = 0;
  updateDisplay();
  operator = '';
}

function compute() {
  if (operator === '+') {
    value = value2 + value;
  } else if (operator === '-') {
    value = value2 - value;
  } else if (operator === 'x') {
    value = value2 * value;
  } else if (operator === '/') {
    value = value2 / value;
  }
  operator = '';
  updateDisplay();
}

function pressDecimalPoint() {
  if (Number.isInteger(value)) {
    valueString = value.toString(); 
    valueString = `${valueString}.`;
    value = parseFloat(valueString);
  }
  updateDisplay();
}

function pressPercentage() {
  if (operator === '') {
    value = value / 100;
    updateDisplay();
  } else {
    displayElement.innerHTML = value2 + ' ' + operator + ' (' + value + '%)';
  }
}

function pressNumber(buttonValue) {
  valueString = value.toString(); 
  if (valueString === '0') {
    valueString = buttonValue.toString(); 
    value = buttonValue; 
  } else {
    // check if it has a decimal point or none
    if (Number.isInteger(value)) {
      // no decimal point
      valueString = valueString + buttonValue.toString(); 
      value = parseInt(valueString);
    } else {
      // it has decimal point
      var decimalToString = value.toString();
      value = parseFloat(value);
      var decimalPlace = decimalToString.indexOf('.');
      var decimalCount = decimalToString.length - decimalPlace - 1;
      if (decimalCount === 1 && decimalToString[decimalToString.length-1] === '0') {
        var newDecimalValue = buttonValue / (10 ** decimalCount); 
      } else {
        var newDecimalValue = buttonValue / (10 ** (decimalCount + 1));
      }
      value = value + newDecimalValue; 
      valueString = value.toString(); 
    }
  }
  updateDisplay();
}

function updateDisplay() {
  displayElement.innerHTML = value.toString();
  adjustFontSize();
}

function adjustFontSize() {
  // Limit font size dynamically based on content length
  var fontSize = 20;
  if (displayElement.scrollWidth > displayElement.clientWidth) {
    fontSize = Math.floor((displayElement.clientWidth / displayElement.scrollWidth) * fontSize);
  }
  displayElement.style.fontSize = fontSize + 'px';
}