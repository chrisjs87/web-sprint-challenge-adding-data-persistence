
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id')
      tbl.text('project_name')
        .notNullable()
      tbl.text('project_description')
      tbl.integer('project_completed')
        .defaultTo(0)
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id')
      tbl.text('resource_name')
        .notNullable()
        .unique()
      tbl.text('resource_description')
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id')
      tbl.text('task_description')
        .notNullable()
      tbl.text('task_notes')
      tbl.integer('task_completed')
        .defaultTo(0)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('projects_resources', tbl => {
      tbl.increments('projects_resources_id')
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
