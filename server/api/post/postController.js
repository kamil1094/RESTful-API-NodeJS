const Post = require('./postModel');
const _ = require('lodash');

module.exports = {
    async params (req, res, next, id) {
        try {
            const post = await Post.findById(id)
                .populate('author categories')
                .exec();
            if (!post) {
                const err = new Error('No post with given id');
                next(err);
            } else {
                req.post = post;
                next();
            }
        } catch (error) {
            next(error);
        }
    },

    async get (req, res, next) {
        try {
            const posts = await Post.find({})
                .populate('author categories')
                .exec();
            res.json(posts);
        } catch (error) {
            next(error);
        }
    },

    async getOne (req, res, next) {
        try {
            const post = req.post;
            res.json(post);
        } catch (error) {
            next(error);
        }
    },

    async put (req, res, next) {
        try {
            const post = req.post;
            const update = req.body;

            _.merge(post, update);

            const updatedPost = await post.save();
            res.json(updatedPost);
        } catch (error) {
            next(error);
        }
    },

    async post (req, res, next) {
        try {
            const newPost = req.body;
            const post = await Post.create(newPost);
            res.json(post);
        } catch (error) {
            next(error);
        }
    },

    async delete (req, res, next) {
        try {
            const removedPost = await req.post.remove();
            res.json(removedPost);
        } catch (error) {
            next(error);
        }
    }
}