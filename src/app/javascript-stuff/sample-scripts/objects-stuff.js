import { consoleHeader } from './console-log'; // CSS formatted description for console log

const phone1 = { type: 'Samsung', model: 'Galaxy', price: 1000 };
const phone2 = { type: 'Pixel', model: 'XL', price: 2000 };
const phone3 = { type: 'iPhone', model: 'XS', price: 3000 };
const specifcation = { ram: '4GB', cpu: 'snapdragon', storage: '64GB' }
const phoneArray1 = [phone1, phone2];
const phoneArray2 = [phone3];

export function doObjectStuff() {
  console.groupCollapsed('Destructuring method arguments');
  displayObjectOriginal(phone1);
  displayObjectDestructured(phone2);
  displayObjectDestructured2(phone3);
  console.groupEnd();

  consoleHeader('Merging objects and arrays');
  console.groupCollapsed('newObject = Object.assign (object1, object2)');
  console.table([mergeObjects1(phone1, specifcation), phone2, mergeObjects1(phone3, {cpu: 'A12'} ) ]);
  console.groupEnd();

  console.groupCollapsed('newObject = {...object1, property: value, ...object2}');
  console.table([mergeObjects2(phone1, specifcation), phone2, mergeObjects2(phone3, {cpu: 'A12'} ) ]);
  console.groupEnd();

  console.groupCollapsed('arryMerge');
  console.table(arrayMerge(phoneArray1, phoneArray2));
  console.groupEnd();
}

// merge objects
function mergeObjects1(object1, object2) {
   const newObject = Object.assign(object1, object2);
   return newObject;
}

function mergeObjects2(object1, object2) {
   const newObject = {...object1, color: 'red', ...object2};
   return newObject;
}

// merge arrays
function arrayMerge(array1, array2){
    const newArray = [...array2, ...array1, ...array2];
    return newArray;
}

// Destructuring
function displayObjectOriginal(phone) {
  consoleHeader('Original');
  console.log(
    `Properties of the phone is: type=${phone.type}, model=${
      phone.model
    }, price=${phone.price}`
  );
}

function displayObjectDestructured({ type, model, price }) {
  consoleHeader('Destructured');
  console.log(
    `Properties of the phone is: type=${type}, model=${model}, price=${price}`
  );
}

function displayObjectDestructured2(phone) {
  const { type, model, price } = phone;
  consoleHeader('Destructured2');
  console.log(
    `Properties of the phone is: type=${type}, model=${model}, price=${price}`
  );
}
