export default function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const matchingValues = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      matchingValues.push(value.slice(startString.length)); // Slice and push the remaining part
    }
  }
  return matchingValues.join('-'); // Join with hyphens
}
