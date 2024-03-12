export default function hasValuesFromArray(set, array) {
  const matchingElements = array.filter((item) => set.has(item));
  if (matchingElements.length === 0) {
    return false;
  }
  return true;
}
