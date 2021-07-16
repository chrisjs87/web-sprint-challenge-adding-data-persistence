const db = require('../../data/dbConfig')

const checkProjectBody = (req, res, next) => {
  const { project_name } = req.body
  if (project_name === undefined || project_name === '') {
    next({ status:400, message: 'invalid project_name' })
  } else {
    next()
  }
}

const checkResourceBody = async (req, res, next) => {
  const { resource_name } = req.body
  const existing = await db('resources as re').where('re.resource_name', resource_name).first()
  if (existing) {
    next({ status:400, message: 'resource by this name already exists' })
  } else {
    next()
  }
}

module.exports = {
  checkProjectBody,
  checkResourceBody
}