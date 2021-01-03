
exports.up = function (knex) {
  return knex.schema.createTable('blogs', table => {
    table.increments('id')
    table.string('title')
    table.string('content', 50000)
    table.string('date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('blogs')
}
