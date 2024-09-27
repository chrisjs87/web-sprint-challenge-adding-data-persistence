const express = require('express')

const mw = require('../middleware')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
  Task.getTasks()
    .then(tasks => {
      res.json(tasks)
    })
})

router.post('/', mw.checkTaskBody, (req, res) => {
  Task.addTask(req.body)
    .then(task => {
      res.json(task)
    })
})

module.exports = router
