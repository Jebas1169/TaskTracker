require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const taskRoutes = require('./routes')

//express app
const app = express() 

// Middleware 
    // Enable CORS for all origins
    app.use(cors());
    
    //to parse JSON data
    app.use(express.json())

// logging the req
app.use((req,res, next) =>{
    console.log(req.path, req.method) 
    next()
})

// Routes
app.use('/api/tasks' ,taskRoutes)

// connect DB
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DB connected')
        // listen for a request
        app.listen(process.env.PORT, () => {
            console.log('listening port ' , process.env.PORT)
})

    })
    .catch((error) => {
        console.log('DB connection failed')
        console.log(error)
    })


