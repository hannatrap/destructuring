//Object Destructuring 1: what does the following code return/print
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

//console.log(numPlanets); 8
//console.log(yearNeptuneDiscovered); 1846

//Object restructuring 2: what does the following code return/print?

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;

  //returns {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

  //Object Destructuring 3: what does the following code return/print?

  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }

  //returns 'Your name is Alejandro and you like purple'
  //returns 'Your name is Melissa and you like green
  //returns 'Your name is undefined and you like green


  //array destructuring 1: What does the following code return/print

  let [first, second, third] = ["Maya", "Marisa", "Chi"];

  //returns Maya
  //returns Marisa
  //returns Chi

  //array destructuring 2: What does the following code return/print?

  let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]

  //returns Raindrops on roses
  //returns whiskers on kittens
  //returns ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

  //array destructuring 3: What does the following code return/print

  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

//returns [10,30,20]

//ES5 Assigning Variables to Object Properties 

//given 
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  //ES2015 version

let obj = {
    nums: {
    a: 1,
    b: 2
}
};

const {a,b} = obj.nums


//Array swap 
//given code: 

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//ES2015 version

[arr[0], arr[1]] = [arr[1], arr[0]]


//RaceResults: 

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest}) 

