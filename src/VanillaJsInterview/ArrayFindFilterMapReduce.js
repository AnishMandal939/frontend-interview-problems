// find - return single element, filter - return array, map - return array, reduce - return single element
// find - return first element, filter - return all elements, map - return all elements, reduce - return single element
// find - return only single element if found multiple items of same value, if data not found then return undefined, filter - return empty array if data not found, map - return empty array if data not found, reduce - return undefined if data not found

// find method implementation

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3];

const is2Exist = numbers.find((number) => number === 2);
console.log(is2Exist); // 2

// another example
const isGreaterExist = numbers.find((number) => number > 5);
console.log(isGreaterExist); // 6 - first element which is greater than 5, though 6, 7, 8, 9, 10 are greater than 5 but it will return first element which is greater than 5

// another example for array of objects
const users = [
  { id: 1, name: "John", age: 20, city: "New York", state: "Maharastra" },
  { id: 2, name: "Doe", age: 30, city: "New Jersey", state: "Karnataka" },
  { id: 3, name: "Smith", age: 40, city: "New York", state: "Tamil Nadu" },
  { id: 4, name: "Alex", age: 50, city: "New Jersey", state: "Andhra Pradesh" },
  { id: 5, name: "Peter", age: 60, city: "New York", state: "Maharastra" },
];

const isAnishPresent = users.find((user) => user.name === "Anish");
const isAJohnPresent = users.find((user) => user.name === "John");

console.log(isAnishPresent); // undefined
console.log(isAJohnPresent); // { id: 1, name: 'John', age: 20, city: 'New York' } , returns whole object

const maharastraGreaterThan20 = users.find(
  (user) => user.state === "Maharastra" && user.age > 20
);
console.log(maharastraGreaterThan20); // { id: 1, name: 'John', age: 20, city: 'New York', state: 'Maharastra' }

// in case of find method, if data not found then it will return undefined, when you write code to find something using find method always check for undefined then inside that condition write your code

// filter method implementation - multiple records which matches the condition
const no3List = numbers.filter((number) => number === 3);
console.log(no3List); // [3, 3] - returns array of all elements which matches the condition

// for if data doesnot exist
const no11List = numbers.filter((number) => number === 11);
console.log(no11List); // [] - returns empty array

// another example for array of objects
const newyorkUsers = users.filter((user) => user.city === "New York");
console.log(newyorkUsers); // [ { id: 1, name: 'John', age: 20, city: 'New York', state: 'Maharastra' }, { id: 3, name: 'Smith', age: 40, city: 'New York', state: 'Tamil Nadu' }, { id: 5, name: 'Peter', age: 60, city: 'New York', state: 'Maharastra' } ]


// map method implementation - returns array of all elements
const numberSquare = numbers.map((number) => number * number);
console.log(numberSquare); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 9]

// another example for array of objects
const userNames = users.map((user) => user.name);
console.log(userNames); // [ 'John', 'Doe', 'Smith', 'Alex', 'Peter' ]

// reduce method implementation - returns single element
const sumOfNumbers = numbers.reduce((acc, number) => acc + number, 0);
console.log(sumOfNumbers); // 58

// another example for array of objects
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge); // 200

// another example for array of objects
const userNamesWithCity = users.reduce((acc, user) => {
  acc.push(`${user.name} - ${user.city}`);
  return acc;
}, []);
console.log(userNamesWithCity); // [ 'John - New York', 'Doe - New Jersey', 'Smith - New York', 'Alex - New Jersey', 'Peter - New York' ]
