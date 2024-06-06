# 0x06. Unittests in JS

## Learning Objectives
1. How to use Mocha to write a test suite
2. How to use different assertion libraries (Node or Chai)
3. How to present long test suites
4. When and how to use spies
5. When and how to use stubs
6. What are hooks and when to use them
7. Unit testing with Async functions
8. How to write integration tests with a small node server


## Learning

Mocha is a testing framework for JavaScript. It works like a testing environment where you can write your tests, run them and check the results. The second item is assertion libraries, which provides a way to extend your tests beyond plain JavaScript syntax. The assertion libraries allow you to implement assertions to validate the results of your tests against the expected result. 

Spies, stubs and hooks are terms used in reference to the testing framework (like Mocha). They describe how a test functions. 

**Spies:**
1. What they do: Think of spies like actual spies watching your every movement. They track how many times a function is called and with what arguments it's called with.
2. Use cases: They are used to verify the arguments a function is called with. They are used to check how many times a function is called during your test.

**Stubs:**
1. What they do: Think of stubs like fake props, they exist to be a representation of a main thing. They are created to model a function in a simple way. They typically don’t have the full functionality of the original function.
2. Use cases: They are used to simulate specific scenarios like isolating code from external dependencies or error conditions.


**Hooks:**
1. What they do: Think of hooks as auxiliary code you can attach to run before or after a test case.
2. Use cases: They are used in setup or teardown logic of multiple test cases. Also to run code that modifies the test environment before or after a test case.


## Requirements
1. Allowed editors: vi, vim, emacs, Visual Studio Code
2. All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
3. All your files should end with a new line
4. A `README.md` file, at the root of the folder of the project, is mandatory
5. Your code should use the `js` extension
6. When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

## Tasks

### 0. Basic test with Mocha and Node assertion library

#### Install Mocha using npm
Set up a script in your `package.json` to quickly run Mocha using `npm test`.

#### Create a new file named `0-calcul.js`
Create a function named `calculateNumber`. It should accept two arguments (numbers) `a` and `b`. The function should round `a` and `b` and return the sum of it.

#### Test cases
Create a file `0-calcul.test.js` that contains test cases of this function. You can assume `a` and `b` are always numbers. Tests should be around the **rounded** part.

#### Tips
For the sake of this example, this test suite is slightly extreme and probably not needed.

#### Requirements
* You have to use `assert`.
* You should be able to run the test suite using `npm test 0-calcul.test.js`
* Every test should pass without any warning.

### 1. Combining descriptions

#### Create a new file named `1-calcul.js`
Upgrade the function created in the previous task (`0-calcul.js`). Add a new argument named `type` as the first argument of the function. `type` can be the strings `SUM`, `SUBTRACT`, or `DIVIDE`. The type argument should guide the mathematical operation that should be performed on the numbers. For example, when type is `DIVIDE`, round the two numbers, and divide `a` with `b` - if the rounded value of `b` is equal to 0, return the string `Error`.

#### Test cases
Create a file `1-calcul.test.js` that contains test cases of this function. You can assume `a` and `b` are always numbers. Tests should be done with `describe` for organization.

#### Tips
For the sake of this example, this test suite is slightly extreme and probably not needed.

#### Requirements
* You have to use `assert`.
* You should be able to run the test suite using `npm test 1-calcul.test.js`
* Every test should pass without any warning.

### 2. Basic test using Chai assertion library
#### Install Chai with npm
Although using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type is easier to read and therefore to maintain.
* Copy the file `1-calcul.js` in a new file `2-calcul_chai.js` 
* Copy the file `1-calcul.test.js` in a new file `2-calcul_chai.test.js`
* Rewrite the test suite, using `expect` from `Chai`

#### Tips
Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you. The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code.

#### Requirements
* You should be able to run the test suite using `npm test 2-calcul_chai.test.js`
* Every test should pass without any warning.

### 3. Spies
#### Install Sinon using npm
Spies are useful wrappers that will execute the wrapped function, and log useful information e.g. (with what arguments was it called?) Sinon is a library allowing you to create spies. 
* Create a new file named `utils.js`
* Create a new module named `Utils`
* Create a property named `calculateNumber` and paste your previous code in the function.
* Export the Utils module.

#### Create a new file named `3-payment.js`
Create a function named `sendPaymentRequestToApi`. It should accept two arguments (numbers) `totalAmount` and `totalShipping`. The function calls the `Utils.calculateNumber` function with type `SUM`, `totalAmount` as `a`, `totalShipping` as `b` and display in the console the message `The total is: <result of the sum>`.

#### Test cases
Create a file `3-payment.test.js` and add a suite named `sendPaymentRequestToApi`. By using `sinon.spy`, make sure the math used for `sendPaymentRequestToApi(100,20)` is the same as `Utils.calculateNumber(‘SUM’, 100, 20) (validate the usage of the `Utils` function).

#### Tips
Remember to always restore a spy after using it in a test, it will prevent you from having weird behaviors. Spies are really useful and allow you to focus only on what your code is doing and not the downstream APIs or functions. Remember that integration tests are different from unit tests. Your unit test should test your code, not the code of a different function.

#### Requirements
* You have to use `spy`.
* You should be able to run the test suite using `npm test 3-payment.test.js`
* Every test should pass without any warning.

### 4. Stubs
#### Create a new file named `4-payment.js` and copy the code from `3-payment.js`
Stubs are similar to spies. Except that you can provide a different implementation of the function you are wrapping. Sinon can be used as well for stubs. 

#### Test cases
Create a file `4-payment.test.js`, and copy the code from `3-payment.test.js`. Imagine that calling the function `Utils.calculateNumber` is actually calling an API or a very expensive method. You don’t necessarily want to do that on every test run. Stub the function `Utils.calculateNumber` to always return the same number `10`. Verify that the stub is being called with `type = SUM`, `a = 100`, and `b = 20`. Add a spy to verify that `console.log` is logging the correct message `The total is: 10`.

#### Tips
* Using stubs allows you to greatly speed up your test. When executing thousands of tests, saving a few seconds is important.
* Using stubs allows you to control specific edge case (e.g. a function throwing an error or returning a specific result like a number or a timestamp)

#### Requirements
* You have to use `stub`.
* You should be able to run the test suite using `npm test 4-payment.test.js`
* Every test should pass without any warning.
* Do not forget to restore the spy and the stub.


### 5. Hooks
#### Create a new file named `5-payment.js` and copy the code from `4-payment.js`
Hooks are useful functions that can be called before executing one or all tests in a suite.

#### Test cases
Create a file `5-payment.test.js`. Inside the same `describe`, create 2 tests:
* The first test will call `sendPaymentRequestToAPI` with 100, and 20. Verify that the console is logging the string `The total is 120`. Verify that the console is only called once.
* The second test will call `sendPaymentRequestToAPI` with 10 and 10. Verify that the console is logging the string `The total is 20`. Verify that the console is only called once.

#### Requirements
* You have to use only one `spy`.
* You should be able to run the test suite using `npm test 5-payment.test.js`
* Every test should pass without any warning.
* You should use a `beforeEach` and a `afterEach` hook to complete this exercise.


### 6. Async tests with done
#### Create a new file named `6-payment_token.js`
Create a new function named `getPaymentTokenFromAPI`. The function will take an argument called `success` (boolean). When `success` is true, it should return a resolved promise with the object `{data: ‘Successful response from the API’ }`, otherwise, the function is doing nothing.

#### Test cases
Create a file `6-payment_token.test.js`, and write a test suite named `getPaymentTokenFromAPI`.

#### Tips
* You should be extremely careful when working with async testing. Without calling `done` properly, your test could be always passing even if what you are actually testing is never executed.

#### Requirements
* You have to use `done` callback to execute this test.
* You should be able to run the test suite using `npm test 6-payment_token.test.js`
* Every test should pass without any warning.


### 7. Skip
#### Using a file named `7-skip.test.js`
Make the test suite pass without fixing or removing the failing test. `it` description must stay the same. When you have a long list of tests, and you can’t figure out why a test is breaking, avoid commenting out a test, or removing it. Skip it instead, and file a ticket to come back to it as soon as possible. 

#### Tips
* Skipping is also very helpful when you only want to execute the test in a particular case (specific environment, or when an API is not behaving correctly).

#### Requirements
* You should be able to run the test suite using `npm test 7-skip.test.js`
* Every test should pass without any warning.


### 8. Basic Integration testing
#### Create a new file named `api.js`
By using `express`, create an instance of `express` called `app`. Listen to port 7865 and log `API available on localhost port 7865` to the browser console when the `express` server is started. For the route `GET /`, return the message `Welcome to the payment system`.

#### Test cases
Create a file `api.test.js`, and write a test suite.

#### Tips
* Since this is an integration test, you will need to have your node server running for the test to pass. 
* You can use the module `request`.

#### Requirements
* You should be able to run the test suite using `npm test api.test.js`
* Every test should pass without any warning.


### 9. Regex integration testing
#### Modify the file named `api.js`
Add a new endpoint: `GET /cart/:id`. `:id` must be only a number (validation must be in the route definition). When access, the endpoint should return `Payment methods for cart :id`. 

#### Test cases
Modify the file `api.test.js`. Add a new test suite for the cart page when `:id` is a number or when `:id` is not a number (=>404) etc.

#### Tips
* You will need to add a small regex in your path to support the usecase

#### Requirements
* You should be able to run the test suite using `npm test api.test.js`
* Every test should pass without any warning.


### 10. Deep equality & Post integration testing
#### Modify the file named `api.js`
* Add a new endpoint: `GET /available_payments`. That returns an object with the following structure;
```javascript
{
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
}
```
* Add an endpoint `POST /login` that returns the message `Welcome :username` where `:username` is the value of the body variable `userName`.

#### Test cases
Modify the file `api.test.js`. Add a new test suite for the `/login` endpoint. Add a test suite for the `/available_payments` endpoint.

#### Tips
* Look at deep quality to compare objects

#### Requirements
* You should be able to run the test suite using `npm test api.test.js`
* Every test should pass without any warning.
* Your server should not display any error
