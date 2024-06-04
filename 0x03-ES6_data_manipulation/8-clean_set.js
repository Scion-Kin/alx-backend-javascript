export default function cleanSet(set, str) {
  if (str === '') return '';

  return [...set].filter((val) => val.startsWith(str)).map((val) => val.slice(str.length)).join('-');
}
