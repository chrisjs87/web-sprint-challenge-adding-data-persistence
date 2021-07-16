const express = require('express')

const Project = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
  Project.getProjects()
    .then(projects => {
      res.json(projects)
    })
})

router.post('/', (req, res) => {})

module.exports = router
