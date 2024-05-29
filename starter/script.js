'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightItems = [...flights.split('+')];

for (const [i, flight] of flightItems.entries()) {
  const data = flight.split(';');
  const [type, from, to, time] = data;

  const getCode = str => str.slice(0, 3).toUpperCase();
  let statement = `${type.startsWith('_Delayed') ? '🔴 ' : ''}${type
    .replaceAll('_', ' ')
    .trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(46);
  // data[0].replaceAll('_', ' ').trim() +
  // ' from ' +
  // data[1].slice(0, 3).toUpperCase() +
  // ' to ' +
  // data[2].slice(0, 3).toUpperCase() +
  // ' (' +
  // data[3].replace(':', 'h') +
  // ')';

  console.log(statement);
}
// Data needed for first part of the section
const weekdays2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours2 = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ mainIndex = 0, starterIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngrediant, ...otherIngredients) {
    console.log(mainIngrediant);
    console.log(otherIngredients);
  },
};

for (const day of weekdays) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.ordderRisotto?.(0, 1) ?? 'Method does not exist');

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane.length);

console.log(plane.indexOf('3'));
console.log(airline.lastIndexOf('A'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-5));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('Middle seat');
  } else {
    console.log('Not a middle seat');
  }
};

checkMiddleSeat('11B');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const st = 'jOnaS';
const correct = st[0].toUpperCase() + st.slice(1).toLowerCase();
console.log(correct);

const email = '  somethInG@gMail.com  \n';
console.log(email.toLowerCase().trim());

const priceGB = '288,97&';
const priceUS = priceGB.replaceAll(',', '.').replace('&', '$');
console.log(priceUS);

const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.startsWith('A320'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of Airbus family');
} else {
  console.log('Not part of Airbus family');
}

const checkLuggage = function (items) {
  const luggage = items.toLowerCase();
  if (luggage.includes('knife') || luggage.includes('gun')) {
    console.log('You are not allowed on the plane');
  } else {
    console.log('Welcome aboard');
  }
};

checkLuggage('I have an apple and a laptop');
checkLuggage('I have a knife');
checkLuggage('I have a gun and some books');
checkLuggage('I have socks and jam');

console.log('a+very+long+lesson'.split('+'));

const [firstName, lastName] = 'Jonas Schmidt'.split(' ');
console.log([firstName]);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (theName) {
  const names = theName.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCredCards = function (number) {
  const str = number + '';
  const masked = str.slice(-4).padStart(str.length, '*');
  console.log(masked);
};

maskCredCards(423659413131);
maskCredCards('4236546546559413131');

const messageg2 = 'Bad weather... All departures delayed! \n';
console.log(messageg2.repeat(5));

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const texts = document.querySelector('textarea').value;

  let rows = texts.split('\n');

  for (const [i, row] of rows.entries()) {
    const phrase = row.trim().toLowerCase().split('_');
    const result = [phrase[0]];
    for (let i = 1; i < phrase.length; i++) {
      result.push(phrase[i].replace(phrase[i][0], phrase[i][0].toUpperCase()));
    }
    const output = result.join('');
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

const userJonas = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

console.log(userJonas[0]?.name ?? 'User array is empty');

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

restaurant.openingHours.fri
  ? console.log(restaurant.openingHours.fri.open)
  : console.log('Not existing');

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);

const myMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of myMenu) console.log(item);

for (const [i, el] of myMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...myMenu.entries()]);

const rest1 = {
  name: 'Capri',
  numOfGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numOfGuests = rest1.numOfGuests || 10;
// rest2.numOfGuests = rest1.numOfGuests || 10;

rest1.numOfGuests ||= 10;
rest2.numOfGuests ||= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.numOfGuests &&= '<ANONYMOUS>';
rest2.numOfGuests &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
console.log('---------OR--------');
console.log(3 || 'Jonas');
console.log('Jonas' || 3);
console.log('' || 'Jonas');
console.log(true || 0);
console.log(0 || true);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello');

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

restaurant.numGuests = 23;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

restaurant.numGuests = 0;
const guestsNum = restaurant.numGuests ?? 10;
console.log(guestsNum);
console.log('---------AND--------');
console.log(0 && 'Jonas');
console.log('Mary' && 'Jonas');
console.log('Jonas' && undefined);
console.log('Jonas' && 0);
console.log('Jonas' && 23 && null && 'Mary');

if (restaurant.orderPizza) {
  restaurant.orderPizza('salami', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('salami', 'alfredo sauce');

// SPREAD because on the right side
const arr3 = [1, 2, ...[3, 4]];

const [n, o, ...others] = [1, 2, 3, 4, 5];
console.log(n, o, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(pizza);
console.log(risotto);
console.log(otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions
const adding = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
adding(2, 3);
adding(2, 3, 4);
adding(2, 3, 4, 5, 6, 7, 8);

const newFunc = [23, 5, 7];
adding(...newFunc);

restaurant.orderPizza('salami', 'mushrooms', 'onions', 'tomatoes', 'olives');

restaurant.orderPizza('ham');
restaurant.orderDelivery({
  time: '22:30',
  address: 'Edsall Road, app. 301, VA, 22304',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '7522 Repblic Court, app. 203, VA, 22306',
});

const arr2 = [7, 8, 9];
const badNewArr = [1, 2, ...arr2];
console.log(badNewArr);

console.log(...badNewArr);

const newMenu = [...restaurant.mainMenu, 'Manti'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const wholeMenu = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(wholeMenu);

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

const ingredients = [
  prompt("Let's make pasta! Imgredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

const newRestaurant = { ...restaurant, founder: 'Me' };
console.log(newRestaurant);

const newRestaurantCopy = { ...restaurant };
newRestaurantCopy.name = 'Milano';
console.log(newRestaurantCopy.name);
console.log(restaurant.name);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let ab = 111;
let bc = 999;
const obj = { ab: 23, bc: 7, cd: 14 };

({ ab, bc } = obj);
console.log(ab, bc);

const {
  fri: { open: op, close: cl },
} = openingHours;
console.log('The Friday working hours are:');
console.log(op, cl);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [first, second] = restaurant.categories;
console.log(first, second);

const [primary, , third] = restaurant.categories;
console.log(primary, third);

[first, second] = [second, first];
console.log(first, second);

const [mainCourse, startCourse] = restaurant.order(2, 0);
console.log(mainCourse, startCourse);

const nested = [2, 3, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

const [k, , [l, m]] = nested;
console.log(k, l, m);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
