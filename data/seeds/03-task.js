exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    { task_description: 'baz', task_notes: null, task_completed: 0, project_id: 1 }
  ])
}
