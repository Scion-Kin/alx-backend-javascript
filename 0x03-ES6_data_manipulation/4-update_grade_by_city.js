export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.filter((obj) => obj.location === city).map((obj) => {
    let grade = newGrades.filter((item) => item.studentId === obj.id)[0];
    grade = grade ? grade.grade : 'N/A';
    return { ...obj, grade };
  });
}
