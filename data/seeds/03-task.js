exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    { task_description: 'task1 proj1', task_notes: null, task_completed: 0, project_id: 1 },
    { task_description: 'task2 proj1', task_notes: null, task_completed: 0, project_id: 1 },
    { task_description: 'task1 proj2', task_notes: null, task_completed: 0, project_id: 2 },
    { task_description: 'task2 proj2', task_notes: null, task_completed: 0, project_id: 2 }
  ])
}
