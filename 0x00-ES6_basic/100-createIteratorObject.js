export default function* createIteratorObject(report) {
  const all = []
  for (let i in report.allEmployees) {
    all.push(...report.allEmployees[i])
  }
  for (let i of all) {
    yield i;
  }
}
