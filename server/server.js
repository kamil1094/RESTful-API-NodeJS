const express = require('express');
const app = express();
const api = require('./api'); //because node recognize index.js as the root in api folder

require('./middleware/appMiddleware')(app);

app.use('/api/', api);

module.exports = app;