const db = require('../../data/dbConfig')

async function getProjects() {
  const rows = await db('projects')  // this is an array of records
  const formattedCollection = []
  rows.forEach(record => {
    if(record.project_completed === 0){
      record.project_completed = false
    } else if(record.project_completed === 1){
      record.project_completed = true
    }

    formattedCollection.push({
      project_id: record.project_id,
      project_name: record.project_name,
      project_description: record.project_description,
      project_completed: record.project_completed
    })
  })

  return formattedCollection
}

function addProject(project) {
  return db('projects').insert(project)
    .then( async ([project_id]) => {
      const row = await db('projects').where('project_id', project_id).first()

      if(row.project_completed === 0){
        row.project_completed = false
      } else if(row.project_completed === 1){
        row.project_completed = true
      }

      const result = {
        project_id: row.project_id,
        project_name: row.project_name,
        project_description: row.project_description,
        project_completed: row.project_completed
      }
      return result
    })
}


module.exports = {
  getProjects,
  addProject
}
