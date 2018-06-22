require('colors');
const util = require('util');

const _ = require('lodash');

const config = require('../config/config');

let noop = () => {};

let consoleLog = config.logging ? console.log.bind(console) : noop;

let logger = {
    log: () => {
        let args = _.toArray(arguments)
            .map((arg) => {
                if (typeof arg === 'object') {
                    let string = JSON.stringify(util.inspect(arg), 2);
                    return string.magenta;
                } else {
                    arg+='';
                    return arg.magenta;
                }
            });
        consoleLog.apply(console, args);
    }
};

module.exports = logger;

