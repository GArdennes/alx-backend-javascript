# 0x00. ES6 Basics
## Learning Objectives
1) What is ES6
2) What is the difference between a constant and a variable in ES6
3) What are block-scoped variables
4) What are arrow functions and how do function parameters default to them?
5) What are rest and spread function parameters
6) What is string templating in ES6
7) What is object creation and what are the properties of objects in ES6
8) What are iterators and for-of loops

##  Requirements
1) All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
2) Allowed editors: vi, vim, emacs, Visual Studio Code
3) All your files should end with a new line
4) A README.md file, at the root of your folder of the project, is mandatory
5) Your code should use the js extension
6) Your code will be tested using the Jest Testing Framework
7) Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
8) All of your functions must be exported.

## Setup
Create GitHub repository: alx-backend-javascript
Install NodeJS 12.11.x (in your home repository)
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
npm -v
```
Alternatively, you can use this code to carry out the installation:
```
#!/bin/bash

# Function to install a specific version of Node.js using NVM
install_node() {
  echo "Installing Node.js version $1"
  nvm install $1
  nvm alias default $1
  nvm use default
}

# Function to install a specific version of npm
install_npm() {
  echo "Installing npm version $1"
  npm install -g npm@$1
}

# Check if NVM is installed
if ! [ -x "$(command -v nvm)" ]; then
  echo "NVM is not installed. Installing now..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
fi

# Uninstall current versions
nvm deactivate
nvm uninstall node
npm uninstall -g npm

# Install specific versions
install_node "v12.11.1"
install_npm "6.11.3"

echo "Installation complete. Versions installed:"
node -v
npm -v
```
In the project directory install Jest, Babel and ESLint by using the supplied package.json and run npm install.

## Configution files
Add the files: package.json, babel.config.js, .eslintrc.js, to your project directory.

## Tasks
### Const or let?
From the code below, modify function taskFirst to instantiate variables using const and function taskNext to instantiate variables using let.
```
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

### Arrow functions
Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)
```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

### Parameter defaults
Condense the internals of the following function to 1 line - without changing the name of each function/variable.
Hint: The key here is to define default parameter values for the function parameters.
```
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

### Rest parameter syntax for functions
Modify the following function to return the number of arguments passed to it using the rest parameter syntax.
```
export default function returnHowManyArguments() {

}
```

### The wonders of spread syntax
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
```
export default function concatArrays(array1, array2, string) {
}
```

### Take advantage of template literals
Rewrite the return statement to use a template literal so you can substitute the variables you’ve defined.
```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```

### Object property value shorthand syntax
Notice how the keys and the variable names are the same? Modify the following function’s budget object to use the key name instead.
```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```

### No need to create empty objects before adding in properties
Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object
```
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```

### ES6 method properties
Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object
```
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

###  For...of Loops
Rewrite the function appendToEachArrayValue to use ES6’s for … of operator. And don’t forget that var is not ES6-friendly.
```
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
```

### Iterator
Write a function named createEmployeesObject that will receive two arguments:
departmentName(String)
employees(Array of Strings)


### Let's create a report object
Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.


### Iterating through report objects
Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject. This function will return an iterator to go through every employee in every department.


### Iterate through object
Finally, write a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject. It should return every employee name in a string, separated by |



