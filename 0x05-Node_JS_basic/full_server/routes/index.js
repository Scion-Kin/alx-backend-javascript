const AppController = require('../controller/AppController');
const StudentsController = require('../controller/StudentsController');

const routes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

module.exports = routes;
