exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { project_name: 'bar', project_description: null, project_completed: 0 }
  ])
}
