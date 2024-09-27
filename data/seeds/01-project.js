exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { project_name: 'proj1', project_description: 'project description', project_completed: 1 },
    { project_name: 'proj2', project_description: 'project description', project_completed: 0 }
  ])
}
