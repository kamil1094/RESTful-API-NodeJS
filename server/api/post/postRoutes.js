const router = require('express').Router();
const logger = require('../../util/logger');

router.route('/')
    .get(() => {
        logger.log('hey from post route');
        res.send({yes: true});
    });

module.exports = router;