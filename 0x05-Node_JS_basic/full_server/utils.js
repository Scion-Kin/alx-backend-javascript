const fs = require('fs').promises;

module.exports = async function readDatabase(file) {
  try {
    const stats = await fs.stat(file);
    if (!stats.isFile()) {
      throw new Error('Cannot load the database');
    }
    const content = await fs.readFile(file, 'utf-8');
    const lines = content.trim().split('\n');
    const students = lines.slice(1, lines.length).map((arg) => arg.split(','));
    const fields = new Set(students.map((arg) => arg[3]));
    const response = {};

    fields.forEach((field) => {
      const all = students.filter((stu) => stu[3] === field).map((stu) => stu[0]);
      response[field] = [...all];
    });
    return response;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
