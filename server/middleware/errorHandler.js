const authorization = (err, req, res, next) => {
    // if error thrown from jwt validation check
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Invalid token');
      return;
}
    res.status(500).send('Oops');
};

const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    console.error(err);
};

const errorLogger = (err, req, res, next) => {
    res.status(500);
    res.json({error: err});
}

module.exports = (app) => {
    app.use(authorization);
    app.use(errorHandler);
    app.use(errorLogger);
}