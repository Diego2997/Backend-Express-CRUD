const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const routes = require('./routes')
 const fibo = require('./middlewares')
const app = express()



// CONFIG
dotenv.config()

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// ROUTE
app.use('/crud', routes)
 app.get('/fibo',fibo)

// SERVER
app.listen(process.env.PORT, () =>{
    console.log(`Server on port ${process.env.PORT}`)
})