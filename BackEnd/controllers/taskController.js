const Task = require('../models/taskModel')
const mongoose = require('mongoose')


// POST a task (CREATE)
const createTask = async (req, res) => {
    const {title, content} = req.body
    try{
        const task = await Task.create({title, content})
        res.status(200).json(task)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


// GET all tasks (READ)
const getAllTasks = async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json(tasks)
}


// GET a specific user Task (READ)



// UPDATE a task (UPDATE)
const updateTask = async (req, res) => {
    const { id } = req.params

    // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Task exist'})
    }
    const task = await Task.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!task) {
        return res.status(400).json({error: 'no such task'})
    }

    res.status(200).json({task})

}


// DELETE a task (DELETE)
const deleteTask = async (req, res) => {
    const { id } = req.params

    // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Task exist'})
    }

    const task = await Task.findOneAndDelete({_id: id})

    if (!task) {
        return res.status(400).json({error: 'no such task'})
    }
    res.status(200).json(task)
}

module.exports = {
    createTask,
    getAllTasks,
    deleteTask,
    updateTask
}