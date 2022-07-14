const express = require('express')
const app = express()
const PORT = 5500

let dbConnectionStr = process.env.DB_STRING,
const connectDB = require('./db')

connectDB()

app.use(express.json())

app.use('/api/Auth', require('./Auth/Route')) //use statement for custom middleware we created in Auth

const server = app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

process.on('unhandledRejection', err =>{
    console.log(`An error occured: ${err.message}`)
    server.close(() => process.exit(1))
})