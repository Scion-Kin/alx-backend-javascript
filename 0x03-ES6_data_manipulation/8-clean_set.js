export default function cleanSet(set, str) {
  if (typeof str !== 'string') return '';

  return [...set].filter((val) => val.startsWith(str)).map((val) => val.slice(str.length)).join('-');
}
