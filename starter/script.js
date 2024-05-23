'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    mainIndex = 0,
    starterIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngrediant, ...otherIngredients) {
    console.log(mainIngrediant);
    console.log(otherIngredients);
  },
};

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
