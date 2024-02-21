const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const taskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
}, {Timestamp: true} )

module.exports = mongoose.model('task', taskSchema)