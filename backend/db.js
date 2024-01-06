const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://nevil:123@cluster0.kbrp299.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}