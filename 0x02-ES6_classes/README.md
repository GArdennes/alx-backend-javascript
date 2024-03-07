# 0x02. ES6 classes
## Learning Objectives
1) How to define a Class
2) How to add methods to a class
3) Why and how to add a static method to a class
4) How to extend a class from another
5) Metaprogramming and symbols

## Learning
Syntax for defining a class:
1. Use the class keyword
```
class ClassName {
  // Class body
}
```
2. Include a constructor method
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```
3. Include a static method
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name + ".");
  }

  // Static method
  static isAdult(age) {
    return age >= 18;
  }
}
```
4. Include an instance method
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  instanceMethodName() {
    console.log("Hello, my name is " + this.name + ".");
  }
}
```
5. Extend a class
```
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the superclass constructor with arguments
    this.breed = breed;
  }

  bark() {
    console.log("Woof! My name is " + this.name + ".");
  }
}

const dog1 = new Dog("Buddy", "Labrador");
dog1.bark(); // Output: Woof! My name is Buddy.

// Inherited method from Animal
dog1.makeSound(); // Output: Generic animal sound
```

## Requirements
1) All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
2) Allowed editors: vi, vim, emacs, Visual Studio Code
3) All your files should end with a new line
4) A README.md file, at the root of the folder of the project, is mandatory
5) Your code should use the js extension
6) Your code will be tested using Jest and the command npm run test
7) Your code will be verified against lint using ESLint
8) Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test

## Setup
Install NodeJS 12.11.x
Install Jest, Babel, and ESLint

## Configuration files
package.json
babel.config.js
.eslintrc.js

## Tasks
### 0. You used to attend a place like this at some point
Implement a class named ClassRoom.
Prototype: export default class ClassRoom. 
It should accept one attribute named maxStudentsSize (Number) and assigned to maxStudentSize.

### 1. Let's make some classrooms
Import the ClassRoom class from 0-classroom.js.
Implement a function named initializeRooms. 
It should return an array of 3 ClassRoom objects with the sizes 19,20, and 34 (in this order).

### 2. A Course, Getters, and Setters
Implement a class named HolbertonCourse. 
The constructor should have the following attributes: name(String), length(Number), students(array of Strings). 
Make sure to verify the type of attributes during object creation. 
Each attribute must be stored in an ‘underscore’ attribute version (ex: name is stored in name). Implement a getter and setter for each attribute.

### 3. Methods, static methods, computed methods names..... MONEY
Implement a class named Currency. 
The constructor attributes should be code(String) and name(String). 
Each attribute must be stored in an ‘underscore’ attribute version (ex: name is stored in name). 
Implement a getter and setter for each attribute. 
Implement a method named ‘displayFullCurrency’ that will return the attributes in the following format: name (code).

### 4. Pricing
Import the class Currency from 3-currency.js. 
Implement a class named Pricing. 
The constructor attributes should be amount(Number) and currency(Currency). 
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in name). 
Implement a getter and setter for each attribute.
Implement a method named displayFullPrice that returns the attributes in the following format ‘amount currency_name (currency_code)’.
Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.

### 5. A Building
Implement a class named ‘Building’.
Constructor attributes: sqft (Number).
Each attribute must be stored in an ‘underscore’ attribute version (ex: name is stored in name)
Implement a getter for each attribute.
Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named ‘evacuationWarningMessage’.
If a class that extends from it does not have a ‘evacuationWarningMessage’ method, throw an error with the message ‘Class extending Building must override evacuationWarningMessage’

### 6. Inheritance
Import Building from 5-building.js
Implement a class named SkyHighBuilding that extends from Building.
Constructor attributes: sqft (Number) (must be assigned to the parent class ‘Building’) floors (Number).
Each attribute must be stored in an ‘underscore’ attribute version (ex: name is stored in _name).
Implement a getter for each attribute
Override the method named ‘evacuationWarningMessage’ and return the following string ‘Evacuate slowly the NUMBER_OF_FLOORS floors’.

### 7. Airport
Implement a class named Airport:
Constructor attributes: name (String) and code (String)
Each attribute must be stored in an ‘underscore’ attribute version (ex: name is stored in name)
The default string description of the class should return the airport ‘code’ 

### 8. Primitive - Holberton Class
Implement a class named ‘HolbertonClass’
Constructor attributes: size(number) and location(string)
Each attribute must be stored in an ‘underscore’ attribute version (ex: name is stored in name)
When the class is cast into a Number, it should return the size.
When the class is cast into a String, it should return the location.

### 9. Hoisting
Fix this code and make it work
```
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];
```

### 10. Vroom
Implement a class named Car.
Constructor attributes: brand(String), motor(String), color(String)
Each attribute must be stored in an ‘underscore’ attribute version (ex: name is stored in name).
Add a method named cloneCar. This method should return a new object of the class.
Hint: Symbols in ES6

