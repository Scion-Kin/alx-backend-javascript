export default function updateStudentGradeByCity(studentList, city, ...newGrades) {
  return newGrades.filter(obj => obj.location === city);
}
