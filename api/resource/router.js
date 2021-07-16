const express = require('express')

const mw = require('./../middleware')
const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
  Resource.getResources()
    .then(resources => {
      res.json(resources)
    })
})

router.post('/', mw.checkResourceBody, (req, res) => {
  Resource.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
})

module.exports = router
