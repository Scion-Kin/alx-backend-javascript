export default function hasValuesFromArray(set, arr) {
  for (const i of arr.values()) {
    if (!set.has(i)) return false;
  }
  return true;
}
