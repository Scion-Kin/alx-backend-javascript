export default function* createIteratorObject(report) {
  const all = [];
  for (const key of Object.keys(report.allEmployees)) {
    all.push(...report.allEmployees[key]);
  }

  for (const i of all) {
    yield i;
  }
}
