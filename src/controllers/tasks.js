const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.json({data: 'all items'})
}
const createTask = async (req, res) => {
    const task = await Task.create({ name: 'first task' })
    res.status(201).json({ task })
}
const getTask = (req, res) => {
    res.json({id: req.params.id})
}
const updateTask = (req, res) => {
    res.send('update')
}
const deleteTask = (req, res) => {
    res.send('delete')
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}