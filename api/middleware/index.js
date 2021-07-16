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

// function helperFunction(body){
//   return db('projects').where('project_id', body.project_id).first()
// }

const checkTaskBody = async (req, res, next) => {
  try {
    const { task_description, project_id } = req.body
    const existingProject = await db('projects').where('project_id', project_id).first()
    // const existingProject = helperFunction(req.body)
    if(task_description === undefined || task_description === '' || project_id === undefined || typeof project_id !== 'number' || existingProject === undefined) {
      next({ status: 400, message: 'task_description or project_id invalid' })
    } else {
      next()
    }
  }
  catch {
    next({status: 500})
  }
}

module.exports = {
  checkProjectBody,
  checkResourceBody,
  checkTaskBody
}