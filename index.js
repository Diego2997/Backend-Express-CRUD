const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()



// CONFIG
dotenv.config()

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// ROUTE
app.use('/crud', routes)


// SERVER
app.listen(process.env.PORT, () =>{
    console.log(`Server on port ${process.env.PORT}`)
})