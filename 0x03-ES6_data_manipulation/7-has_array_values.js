export default function hasValuesFromArray(set, array) {
  for (const value of set) {
    const matchingElements = array.filter((item) => item === value);
    if (matchingElements.length === 0) {
      return false;
    }
  }
  return true;
}
