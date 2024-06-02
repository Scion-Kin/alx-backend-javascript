export default function* createIteratorObject(report) {
  const all = [];
  for (const i in report.allEmployees) {
    all.push(...report.allEmployees[i]);
  }
  for (const i of all) {
    yield i;
  }
}
