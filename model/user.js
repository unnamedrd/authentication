const Mongoose = require("mongoose")
const UserScheme = new Mongoose.Schema({
    username: {
        type: String, 
        unique: true, 
        required: true,
    },
    password: {
        type: String, 
        minLength: 6, 
        required: true, 
    }, 
    role: {
        type: String, 
        default: "Basic", 
        required: true, 
    },
})

const User = Mongoose.model('user', UserSchema)

module.exports = User
