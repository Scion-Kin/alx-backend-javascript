export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const i of reportWithIterator) {
    str += `${i} | `;
  }
  return str.slice(0, -3); // remove the last unused separator
}
