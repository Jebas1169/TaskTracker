const express = require('express')
const{
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
} = require('./controllers/taskController')

const router = express.Router()

// GET all tasks (READ)
router.get('/', getAllTasks)

// GET a specific user Task (READ)
router.get('/:id', (req, res) => {
    res.json({msg: 'Get a single user task'})
})


// POST a task (CREATE)
router.post('/', createTask)

// DELETE a task (DELETE)
router.delete('/:id', deleteTask)

// UPDATE a task (UPDATE)
router.patch('/:id', updateTask)


module.exports = router