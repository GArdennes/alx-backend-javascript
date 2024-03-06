# 0x01. ES6 Promises
## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
1) Promises(the how, why and what)
2) How to use then, resolve and catch methods
3) How to use every method of the Promise object
4) Throw/Try
5) The await operator
6) How to use an async function

## Learning
Syntax of Promise constructor
```
new Promise((resolve, reject) => {
  // Perform asynchronous operation
  if (operationSuccessful) {
    resolve(resultValue); // Resolve the promise with the result value
  } else {
    reject(errorReason); // Reject the promise with the error reason
  }
});

promise.catch(onRejectedCallback);
```

Q: The purpose of promises is to do away with the waiting time of callback functions?
A: No, the purpose of promises is not to eliminate the waiting time inherent in asynchronous operations. Asynchronous operations by their nature demand some waiting time until the operation completes. Promises don’t change that instead they enhance the way asynchronous code is written and managed.

Imagine you’re about to prepare a meal. You ask your friend (a function) to buy some groceries from the shop for you. Your friend gives you his word (a promise) that he would do so. While your friend heads to the shop for the groceries, you start with your meal prep as you wait. When your friend arrives, he either delivers you the groceries (fulfilling his promise), then you can use them as required or he explains why he could not get the groceries, which means you catch what the issue was and then investigate or resolve the issue. 

Q: What are the methods of the promise object with examples
A: Here are the following;
1) Promise.all(iterable)
```
// Simulate 3 asynchronous operations (e.g., network requests)
const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 3000));

// Wait for all promises to settle and handle the combined result
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log("All promises resolved:", results); // Output: All promises resolved: [1, 2, 3]
  })
  .catch(error => {
    console.error("Error:", error);
  });
```
2) Promise.race(iterable)
```
// Simulate multiple asynchronous operations (e.g., network requests)
const promise1 = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));

// Wait for the first promise to settle and handle the result
Promise.race([promise1, promise2])
  .then(result => {
    console.log("First promise resolved:", result); // Output: First promise resolved: Fast
  })
  .catch(error => {
    console.error("Error:", error);
  });
```
3) Promise.reject(reason)
```
// Create a new promise that is immediately rejected
const rejectedPromise = Promise.reject(new Error("Operation failed"));

// Handle the rejection using .catch()
rejectedPromise
  .then(value => {
    // This won't be called, as the promise is rejected
  })
  .catch(error => {
    console.error("Error:", error.message); // Output: Error: Operation failed
  });
```
4) Promise.catch(onRejectedCallback)
```
// Create a promise that might fail
const fetchUserData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = new Error("Network error");
      reject(error); // Simulate a network error
    }, 1000);
  });

// Fetch user data and handle potential error
fetchUserData()
  .then(userData => {
    console.log("User data:", userData);
  })
  .catch(error => {
    console.error("Error fetching data:", error.message); // Output: Error fetching data: Network error
  });
```
5) Promise.finally(onFinallyCallback)
```
const longRunningPromise = new Promise(resolve => setTimeout(() => resolve("Done"), 3000));

// Run code after the promise settles, regardless of success or failure
longRunningPromise
  .then(value => {
    console.log("Promise resolved:", value);
  })
  .catch(error => {
    console.error("Promise rejected:", error);
  })
  .finally(() => {
    console.log("Always runs after promise settles");
  });
```

Async/await syntax
```
async function fetchUserData() {
  const response = await fetch("https://api.example.com/users/1");
  const data = await response.json();
  return data;
}

fetchUserData()
  .then(userData => {
    console.log("User data:", userData);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
```

## Requirements
* All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the hs extension
* Your code will be tested using Jest and the command: ```npm run test```
* Your code will be verified against lint using ESLint
* All of your functions must be exported

## Setup
Install NodeJS 12.11.x
Install Jest, Babel, and ESLint

## Response Data Format
uploadPhoto returns a response with the format
```
{
  status: 200,
  body: ‘photo-profile-1’,
}
```
createUser returns a response with the format
```
{
  firstName: ‘Guillaume’,
  lastName: ‘Salva’,
}
```

## Tasks
### 0. Keep every promise you make and only make promises you can keep
Return a promise using this prototype function getResponseFromAPI()

### 1. Don't make a promise...if you know you can't keep it
Using the prototype below, return a promise. The parameter is a boolean
getFullResponseFromAPI(success)
When the argument is true, resolve the promise by passing an object with 2 attributes: status:200 and body: ‘Success’. 
When the argument is false reject the promise with an error object with the message “The fake API is not working currently”

### 2. Catch me if you can!
Using the function prototype below
function handleResponseFromAPI(promise)
Append three handlers to the function:
When the promise resolves, return an object with the following attributes
status: 200
body: success
When the promise rejects, return an empty Error object
For every resolution, log ‘Got a response from the API’ to the console

### 3. Handle multiple successful promises
In this file, import uploadPhoto and createUser from utils.js. Knowing that the function in utils.js returns promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.
function handleProfileSignup()
In the event of an error, log Signup system offline to the console

### 4. Simple promise
Using the following prototype:
function signUpUser(firstName, lastName)
That returns a resolved promise with this object:
{ firstName: value, lastName: value, }

### 5. Reject the promises
Write and export a function named uploadPhoto. It should accept one argument fileName(string). The function should return a Promise rejecting with an Error and the string $fileName cannot be processed

### 6. Handle multiple promises
Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js
Write and export a function named handleProfileSignup. It should accept three arguments: firstName (string), lastName (string), and filename (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:
[{status: status_of_the_promise}, value: value or error returned by the Promise]

### 7. Load balancer
Write and export a function named loadBalancer. It should accept two arguments chinaDownload (Promise) and USDownload (Promise). The function should return the value returned by the promise that resolved the first.

### 8. Throw error / try catch
Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number). When the denominator argument is equal to 0, the function should throw a new error with the message ‘cannot divide by 0’. Otherwise it should return the numerator divided by the denominator.

### 9. Throw an error
Write a function named guardrail that will accept one argument mathFunction (Function). This function should create and return an array named queue. When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message 'Guardrail was processed' should be added to the queue.

### 10. Await / Async
Import uploadPhoto and createUser from utils.js
Write an async function named asyncUploadUser that will call these two functions and return an object with the following format:
{photo: response_from_uploadPhoto_function, user: response_from_createUser_function,}
If one of the async function fails, return an empty object. Example:
{photo: null, user: null,}
