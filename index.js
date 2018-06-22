const config = require('./server/config/config');
const app = require('./server/server');


const logger = require('./server/util/logger');

app.listen(config.port, () => {
    console.log('listen on http://localhost:' + config.port);
});
