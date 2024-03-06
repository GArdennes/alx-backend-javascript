export function getResponseFromAPI() {
  const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
  return promise1;
}

