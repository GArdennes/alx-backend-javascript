# 0x03. ES6 data manipulation
## Learning Objectives
1) How to use map, filter and reduce on arrays
2) Typed arrays
3) The set, map, and weak link data structures

## Learning
The map, filter and reduce methods are convenient ways of handling arrays built into JavaScript. They offer a more concise way of writing code compared to the traditional way of writing loops.
1) map(): This method lets you implement a function (called the callback function) on each element of the array and return the array with the new elements.
2) filter(): The filter method acts like a literal filter, sorting out elements that don’t meet a criteria and returning only the elements of the array that do.
3) reduce():  The reduce method considers all the elements of the array and by some method of aggregation according to the callback function produces one output. 
4) Typed arrays (e.g. Int32Array() and Float32Array()): They are special types of arrays unlike normal data arrays that are capable of holding different data types in an array. These are only suitable for just one type either integers or floating-point numbers.

 The Set data structure stores a collection of unique items such that no element can be repeated. e.g. 
// Create a set
const fruits = new Set(["apple", "banana", "orange", "banana"]); // "banana" will be added only once

// Add elements
fruits.add("mango");

// Check if an element exists
console.log("Does the set have grapes?", fruits.has("grapes")); 

The Map data structure stores a collection of items as key-value pairs. e.g. 
// Create a map
const users = new Map();

// Add key-value pairs
users.set(1, { name: "Alice", email: "alice@example.com" });
users.set("Bob", { name: "Bob", email: "bob@example.com" });

// Get the value for a key
const alice = users.get(1);
console.log("Alice's email:", alice.email);

## Requirements
1) All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
2) Allowed editors: vi, vim, emacs, visual studio code
3) All your files should end with a new line
4) A readme file, at the root of the folder of the project, is mandatory
5) Your code should use the js extension
6) Your code will be tested using Jest and the command npm run test
7) Your code will be verified against lint using ESLint
8) Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
9) All of your functions must be exported

## Setup
Install NodeJS 12.11.x
Install Jest, Babel, and ESLint

## Configuration files
package.json
babel.config.js
.eslintrc.js

## Tasks
### 0. Basic list of objects
Create a function named ‘getListStudents’ that returns an array of objects. 
Each object should have three attributes: id (Number), firstName(String), and location (String).
The array contains the following students in order:
Guillaume, id: 1, in San Francisco
James, id: 2, in Columbia
Serena, id: 5, in San Francisco

### 1. More mapping
Create a function getListStudentIds that returns an array of ids from a list of object. 
This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.
If the argument is not an array, the function is returning an empty array.
You must use the map function on the array.

### 2. Filter
Create a function getStudentsByLocation that returns an array of objects who are located in a specific city. 
It should accept a list of students (from getListStudents) and a city(string) as parameters
You must use the filter function on the array.

### 3. Reduce
Create a function getStudentIdsSum that returns the sum of all the student ids.
It should accept a list of students (from getListStudents) as a parameter.
You must use the reduce function on the array.

### 4. Combine
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade.
It should accept a list of students(from getListStudents), a city(string), and newGrades (array of “grade” objects) as parameters. newGrades is an array of objects with this format.
If a student doesn’t have a grade in newGrades, the final grade should be N/A.
You must use a filter and map combined.

### 5. Typed Arrays
Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position. 
It should accept three arguments: length (number), position (number), and value (number).
If adding the value is not possible the error Position outside range should be thrown.

### 6. Set data structure
Create a function named setFromArray that returns a Set from an array.
It accepts an argument (array, of any kind of element)

### 7. More set data structure
Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set. 
It accepts two arguments: a set (Set) and an array (Array).

### 8. Clean set
Create a function named cleanSet that returns a string of all the set values that start with a specific string(startString).
It accepts two arguments: a set(Set) and a startString(String).
When a value starts with startString you only append the rest of the string. The string contains all the values of the set separated by -.

### 9. Map data structure
Create a function named groceriesList that returns a map of groceries with the following items(name, quantity):

### 10. More map data structure
Create a function named updateUniqueItems that returns an updated map for all items with initial quantity at 1.
It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.
For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error Cannot process should be thrown.

