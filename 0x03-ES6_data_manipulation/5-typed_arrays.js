export default function createInt8TypedArray(length, position, number) {
  if (position < 0 || position >= length) throw new Error('Position outside range');

  const arr = new ArrayBuffer(length);
  const dt = new DataView(arr);
  dt.setInt8(position, number);

  return dt;
}
