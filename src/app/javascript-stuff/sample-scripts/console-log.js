// https://angularfirebase.com/lessons/code-this-not-that-javascript-pro-tips/
// https://developer.mozilla.org/en-US/docs/Web/API/console#Stack_traces
const phone1 = { type: 'Samsung', model: 'Galaxy', price: 1000 };
const phone2 = { type: 'Pixel', model: 'XL', price: 2000 };
const phone3 = { type: 'iPhone', model: 'XS', price: 3000 };

export function log() {
  console.group('console.group()');
  logMultiple('Displaying multiple objects in console');
  logTable('Using console.table([object1, object2, object3])');
  console.groupEnd();


  console.groupCollapsed('Stack traces');
  console.trace('This is a trace');
  console.error('This is an error');
  console.groupEnd();
}


function logTable(descriptionText) {
  consoleHeader(descriptionText);
  console.table([phone1, phone2, phone3]);
}

function logMultiple(descriptionText) {
  consoleHeader(descriptionText);
  bad();
  console.log(phone1);

  good();
  console.log({ phone1, phone2, phone3 });
}

export function consoleHeader(text) {
  console.log(`%c ${text}`, `color:blue; font-size:14px; font-weight:bold;`);
}
function bad() {
  console.log('%c BAD ', 'color:red;');
}

function good() {
  console.log('%c GOOD ', 'color:green;');
}
