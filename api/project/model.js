// build your `Project` model here
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


module.exports = {
  getProjects
}
