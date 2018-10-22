import { consoleHeader } from './console-log'; // CSS formatted description for console log
import { async } from 'q';

export function doAsyncAwait() {
  // returns a random number asynchronously
  const random = () => {
    return Promise.resolve(Math.random());
  };

  const sumPromiseRandomNumbersWithThen = () => {
    consoleHeader(`Sum Random numbers with .then() chaining`);
    let first;
    let second;
    let third;

    return random()
      .then(v => {
        first = v;
        console.log(`First = ${first}`);
        return random();
      })
      .then(v => {
        second = v;
        console.log(`second = ${second}`);
        return random();
      })
      .then(v => {
        third = v;
        console.log(`Third = ${third}`);
        return first + second + third;
      })
      .then(v => console.log(`Sum = ${v}`));
  }; // end sumRandomNumbers

  const sumPromiseRandomNumbersWithAsync = async () => {
    await consoleHeader(`Sum Random numbers with async`);
    let first = await random();
    console.log(`First = ${first}`);
    let second = await random();
    console.log(`second = ${second}`);
    let third = await random();
    console.log(`Third = ${third}`);
    console.log(`Sum = ${first + second + third}`);
  };

  // Calling the functions
  const callSumFunctions = async () => {
    await sumPromiseRandomNumbersWithAsync();
    await sumPromiseRandomNumbersWithThen();
  };
  callSumFunctions();
}
