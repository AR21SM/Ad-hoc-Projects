const mongoose=require("mongoose")
const { MONGO_URI } = require("./config");

mongoose.connect(MONGO_URI)
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error("Database connection error:", err));

const TOdoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
})

const todo=mongoose.model('todos',TOdoschema);


module.exports=({
    todo
})