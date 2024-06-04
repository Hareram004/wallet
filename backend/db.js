const mongoose = require("mongoose")
//const { Schema } = mongoose

mongoose.connect("")

const userSchema =new mongoose.Schema({
    username : String,
    password : String,
    firstName : String,
    lastName : String
})

const bankSchema =new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const User = mongoose.model("User", userSchema)
const Accounts = mongoose.model("Account", bankSchema)

module.exports = {
    User,
    Accounts
}
