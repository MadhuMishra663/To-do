const mongoose=require('mongoose');
const TodoSchema = new mongoose.Schema({
   task: String
})
const TodoModel=new mongoose.model('todos',TodoSchema);
module.exports=TodoModel