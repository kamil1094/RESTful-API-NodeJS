const User = require('./userModel');
const _ = require('lodash');

module.exports = {
    params: async (req, res, next, id) => {
        try {
            const user = await User.findById(id);
            if (!user) {
                const err = new Error('No user with given id');
                next(err);
            } else {
                req.user = user;
                next();
            }
        } catch (error) {
            next(error);
        }
    },

    get: async (req, res, next) => {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const user = req.user;
            res.json(user);
        } catch (error) {
            next(error);
        }
    },

    put: async (req, res, next) => {
        try {
            let user = req.user;
            const update = req.body;

            _.merge(user, update);
            const updatedUser = await user.save();
            res.json(updatedUser);
        } catch (error) {
            next(error);
        }
        
    },

    post: async (req, res, next) => {
        try {
            const newUser = req.body;
            const savedUser = await User.create(newUser);
            res.json(savedUser);
        } catch (error) {
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const removedUser = await req.user.remove();
            res.json(removedUser);
        } catch (error) {
            next(error);
        }
    }
}