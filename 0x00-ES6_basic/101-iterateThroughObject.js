export default function iterateThroughObject(reportWithIterator) {
  const arr = [];
  for (const i of reportWithIterator) {
    arr.push(i);
  }
  return [...arr].join(' | ');
}
