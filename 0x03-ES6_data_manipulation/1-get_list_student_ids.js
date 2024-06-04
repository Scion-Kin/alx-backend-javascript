export default function getListStudentIds(studentList) {
  if (!(studentList instanceof Array)) return [];
  return [...studentList].map((obj) => obj.id);
}
