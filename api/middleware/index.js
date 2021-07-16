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

const checkTaskBody = async (req, res, next) => {
  const { task_description, project_id } = req.body
  const existingProject = await db('projects').where('project_id', project_id).first()
  if(task_description === undefined || task_description === '' || project_id === undefined || typeof project_id !== 'number') {
    next({ status: 400, message: 'task_description or project_id invalid' })
  } else if (!existingProject) {
    next({ status: 400, message: 'the project you have assigned the task does not exist' })
  } else {
    next()
  }
}

module.exports = {
  checkProjectBody,
  checkResourceBody,
  checkTaskBody
}