export default function updateUniqueItems(map) {
  try {
    const updatedMap = new Map();

    for (const [key, value] of map) {
      if (value === 1) {
        updatedMap.set(key, 100);
      } else {
        updatedMap.set(key, value);
      }
    }

    return updatedMap;
  } catch (error) {
    throw new Error('Cannot process');
  }
}
