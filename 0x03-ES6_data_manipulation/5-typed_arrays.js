export default function createInt8TypedArray(length, position, value) {
  try {
    const arrayBuffer = new ArrayBuffer(length);
    const int8Array = new Int8Array(arrayBuffer);

    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }

    int8Array[position] = value;
    const dataView = new DataView(arrayBuffer);

    return dataView;
  } catch (error) {
    throw new Error('Position outside range');
  }
}
