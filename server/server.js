const express = require('express');
const app = express();
const config = require('./config/config');
const api = require('./api'); //because node recognize index.js as the root in api folder
const mongoose = require('mongoose');
const auth = require('./auth/routes');

mongoose.connect('mongodb://localhost/nodeRESTful');
mongoose.connection.on('open', () => {
    console.log('We are connected to the DB.');
});

if (config.seed) {
    require('./util/seed');
}

require('./middleware/appMiddleware')(app);

app.use('/api/', api);
app.use('/auth', auth);

require('./middleware/errorHandler')(app);

module.exports = app;