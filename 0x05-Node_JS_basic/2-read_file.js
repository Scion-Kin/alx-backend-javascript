const fs = require('fs');

module.exports = function countStudents(file) {
  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    const content = fs.readFileSync(file, 'utf-8').trim().split('\n');
    const students = content.slice(1, content.length).map((arg) => arg.split(','));
    const fields = new Set(students.map((arg) => arg[3]));
    console.log(`Number of students: ${content.length - 1}`);

    fields.forEach((field) => {
      const all = students.filter((stu) => stu[3] === field).map((stu) => stu[0]);
      console.log(`Number of students in ${field}: ${all.length}. List: ${all.join(', ')}`);
    });
  } else {
    throw new Error('Cannot load the database');
  }
};
