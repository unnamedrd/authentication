const Mongoose = require("mongoose")

const dbConnectionStr = process.env.DB_STRING,

const connectDB = async () => {
    Mongoose.connect(RemoteDB)
        .then(client => {
            console.log("MongoDB connection succesful")
    })
}

module.exports = connectDB