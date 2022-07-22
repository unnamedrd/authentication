const express = require('express')
const app = express()
const PORT = 5500
const ConnectDB = require('./db')
connectDB()
const server = app.listen(PORT, ()=> console.log(`server connected to port ${PORT}`))

let dbConnectionStr = process.env.DB_STRING,
const connectDB = require('./db')



app.use(express.json())

app.use('/api/Auth', require('./Auth/Route')) //use statement for custom middleware we created in Auth

process.on('unhandledRejection', err =>{
    console.log(`An error occured: ${err.message}`)
    server.close(() => process.exit(1))
})