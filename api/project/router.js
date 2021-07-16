const express = require('express')

const Project = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
  Project.getProjects()
    .then(projects => {
      res.json(projects)
    })
})

router.post('/', (req, res) => {
  Project.addProject(req.body)
    .then(project => {
      res.status(201).json(project)
    })
})

module.exports = router
