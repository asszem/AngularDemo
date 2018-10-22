import { consoleHeader } from './console-log'; // CSS formatted description for console log

const dataArray = [10, 20, 11, 50, 80];

export function doForLoops() {
  consoleHeader('For Loops');
  forLoopOriginal(dataArray);
  console.group("New methods")
  getTotalWithArrayReduce(dataArray)
  updateElementsWithArrayMap(dataArray)
  filterElementsWithArrayFilter(dataArray);
  console.groupEnd
}


function getTotalWithArrayReduce(inputArray){
    consoleHeader('Getting total with array.reduce');
    const total = inputArray.reduce((accumulated, current) => accumulated + current);
    console.log(total);
}

function updateElementsWithArrayMap(inputArray){
    consoleHeader('Updating each value in the array');
    const newUpdatedArray = inputArray.map( value => value * 1.1);
    console.table(newUpdatedArray);
}

function filterElementsWithArrayFilter(inputArray){
    consoleHeader('Filtering values of the array');
    const newUpdatedArray = inputArray.filter( value => value >=50); // only the true results are added to the new array
    console.table(newUpdatedArray);
}

function forLoopOriginal(inputArray) {
  console.group('Original For Loop');
  let total = 0; // array total
  let withTax = []; // array values plus 10%
  let overFifty = []; // array values over 50
  var i;
  console.group('Original array');
  for (i = 0; i < inputArray.length; i++) {
    console.log(`array[${i}]=${inputArray[i]}`);
    total += inputArray[i];
    withTax.push(inputArray[i] * 1.1);
    if (inputArray[i] > 50) {
      overFifty.push(inputArray[i]);
    }
  }
  console.groupEnd();
  console.log(`Array total: ${total}`);
  console.group('With Tax');
  console.table(withTax);
  console.groupEnd();
  console.group('Over fifty');
  console.table(overFifty);
  console.groupEnd();
  console.groupEnd();
}
