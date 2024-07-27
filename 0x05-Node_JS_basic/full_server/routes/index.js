const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const routes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

module.exports = routes;
