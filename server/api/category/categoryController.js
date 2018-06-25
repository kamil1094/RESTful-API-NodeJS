const Category = require('./categoryModel');
const _ = require('lodash');

module.exports = {
    params: async (req, res, next, id) => {
        try {
            const category = await Category.findById(id);
            if (!category) {
                const err = new Error('No category with given id');
                next(err);
            } else {
                req.category = category;
                next();
            }
        } catch (error) {
            next(error)
        }
    },

    get: async (req, res, next) => {
        try {
            const categories = await Category.find({});
            res.json(categories);
        } catch (error) {
            next(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const category = req.category;
            res.json(category);
        } catch (error) {
            next(error);
        }
    },

    put: async (req, res, next) => {
        try {
            let category = req.category;
            const update = req.body;

            _.merge(category, update);

            const updatedCategory = await category.save();
            res.json(updatedCategory);
        } catch (error) {
            next(error);
        }
    },

    post: async (req, res, next) => {
        try {
            const newCategory = req.body;
            const savedCategory = await Category.create(newCategory);
            res.json(savedCategory);
        } catch (error) {
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const removedCategory = req.category.remove();
            res.json(removedCategory);
        } catch (error) {
            next(error);
        }
    }
}