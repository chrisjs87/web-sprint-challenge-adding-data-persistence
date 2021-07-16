const express = require('express')

const Task = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
  Task.getTasks()
    .then(tasks => {
      res.json(tasks)
    })
})

router.post('/', (req, res) => {
  Task.addTask(req.body)
    .then(task => {
      res.json(task)
    })
})

module.exports = router
