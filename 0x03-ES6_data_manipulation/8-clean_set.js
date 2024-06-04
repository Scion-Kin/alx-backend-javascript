export default function cleanSet(set, str) {
  if (!str || !set || typeof str !== 'string' || !(set instanceof Set)) return '';

  return [...set.values()].filter((val) => val.startsWith(str)).map((val) => val.slice(str.length)).join('-');
}
