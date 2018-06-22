const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(morgan('tiny'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
};