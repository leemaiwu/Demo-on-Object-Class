
const person = {
  firstName: "Laura",
  lastName: "Wu",
  age: 29
};
//// This is dot notation ////
// console.log(person.firstName);
//// This is bracket notation ////
// console.log(person["lastName"]);

const meal = {
  appetizer: "chips & salsa",
  entree: "carne asada burrito",
  dessert: "tres leches",
  drink: "horchata"
};

const meal2 = {
  appetizer: "ceviche",
  entree: "loaded nachos",
  dessert: "churro",
  drink: "cerveza"
};

//// This is curly braces destructuring ////
let {dessert, appetizer, entree} = meal;
//// This is dot notation destructuring ////
// let dessert = meal.dessert;

console.log(`${entree} for my entree`);

let newFav = "water";
meal.drink = newFav;

let {drink} = meal;
console.log(`${entree} with ${drink}`);

//// rename and desctructive ////
const {drink: drink2, appetizer: appetizer2, dessert: dessert2, entreee: entree2} = meal2;

//// loop over meal2 ////
//// if the key dessert, update the value to be churros ////
//// print to console, else print the value ////
for (let key in meal2) {
  if (key === "dessert") {
    meal2[key] = "churros";
    console.log(meal2[key])
  } else {
    console.log(key);
  }
};

//// add and remove key value pairs ////
let teams = {
  teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
  teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
  teamThree: ['porter', 'blake', 'june', 'owen'],
  teamFour: ['brian', 'riley', 'ezra', 'jordan'],
  teamFive: ['grey', 'milo', 'mckay', 'leo']
};

teams.teamSix = ["Laura", "Jack", "Race", "Linda"];
console.log(teams);

delete teams.teamFour;
console.log(teams);

