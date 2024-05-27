export default function createEmployeesObject(departmentName, employees) {
  const data = {};
  data[`${departmentName}`] = [...employees];
  return data;
}
