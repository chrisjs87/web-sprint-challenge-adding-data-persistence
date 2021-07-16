exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    { resource_name: 'foo', resource_description: null }
  ])
}
