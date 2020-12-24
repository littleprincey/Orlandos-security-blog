
exports.up = function (knex) {
  return knex.schema.createTable('blogs', table => {
    table.increments('id')
    table.string('title')
    table.string('content')
    table.string('date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('blogs')
}
