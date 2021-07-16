const express = require('express')

const mw = require('../middleware')
const Project = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
  Project.getProjects()
    .then(projects => {
      res.json(projects)
    })
})

router.post('/', mw.checkProjectBody, (req, res) => {
  Project.addProject(req.body)
    .then(project => {
      res.status(201).json(project)
    })
})

// router.use((err, req, res, next) => { // eslint-disable-line
//   res.status(err.status || 500).json({
//     message: err.message,
//     stack: err.stack,
//   })
// })

module.exports = router
