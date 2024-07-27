const express = require('express');
const routes = require('./routes/index');

const app = express();

routes(app);
app.listen(1245);

module.exports = app;
