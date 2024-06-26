const mongoose = require("mongoose");
// or
// const { default: mongoose} = require("mongoose");



const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    createdOn: {
        type: String,
        // require: Date.now,
        require: new Date(),
    },
});


module.exports = mongoose.model("User", userSchema);





