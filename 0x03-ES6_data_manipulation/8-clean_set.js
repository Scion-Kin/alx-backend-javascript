export default function cleanSet(set, str) {
  if (!(set instanceof Set) || typeof str !== 'string' || !str) return '';

  return [...set]
    .filter((val) => typeof val === 'string' && val.startsWith(str))
    .map((val) => val.slice(str.length))
    .join('-');
}
