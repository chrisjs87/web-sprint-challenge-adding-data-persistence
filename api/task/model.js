const db = require("../../data/dbConfig");

async function getTasks() {
  const rows = await db('tasks')
  .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
  const formattedCollection = []
  rows.forEach(record => {
    if(record.task_completed === 0){
      record.task_completed = false
    } else if(record.task_completed === 1){
      record.task_completed = true
    }


    formattedCollection.push({
      task_id: record.task_id,
      task_notes: record.task_notes,
      task_description: record.task_description,
      task_completed: record.task_completed,
      project_name: record.project_name,
      project_description: record.project_description
    })
  })

  return formattedCollection
}

function addTask(task) {
  return db('tasks').insert(task)
    .then( async ([task_id]) => {
      const row = await db('tasks').where('task_id', task_id).first()

      if(row.task_completed === 0){
        row.task_completed = false
      } else if(row.task_completed === 1){
        row.task_completed = true
      }

      const result = {
        ...row,
        task_completed: row.task_completed
      }
      return result
    })
}


module.exports = {
  getTasks,
  addTask
}
