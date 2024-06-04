export default function getStudentIdsSum(studentList) {
  return studentList.reduce((prev, curr) => prev + curr.id, 0);
}
