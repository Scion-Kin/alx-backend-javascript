const readDatabase = require('../utils');

module.exports = class StudentsController {
  static getAllStudents(request, response) {
    return readDatabase(process.argv[2])
      .then((data) => {
        const res = ['This is the list of our students'];
        for (const i in data) {
          if (i !== null) {
            res.push(`Number of students in ${i}: ${data[i].length}. List: ${data[i].join(', ')}`);
          }
        }
        response.send(res.join('\n'));
      })
      .catch((error) => response.status(500).send(error.message));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    return readDatabase(process.argv[2])
      .then((data) => response.send(`List: ${data[major].join(', ')}`))
      .catch((error) => response.status(500).send(error.message));
  }
};
