const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todos');

const TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
});

const Todo = mongoose.model('todo', TodoSchema);

const createObj = async () => {
    try {
        const result = await Todo.create({
            name: 'clean up your room!!!',
            completed: false
        });
        console.log(result);
    } catch (error) {
        console.log(error)
    }
};

createObj();

