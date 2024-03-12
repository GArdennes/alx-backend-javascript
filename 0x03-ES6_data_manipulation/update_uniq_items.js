export default function updateUniqueItems(map) {
  try {
    const updatedMap = new Map();

    map.forEach((value, key) => {
      if (value === 1) {
        updatedMap.set(key, 100);
      } else {
	updatedMap.set(key, value);
      }
    });
    return updatedMap;
  } catch (error) {
    throw new Error('Cannot process');
  }
}
