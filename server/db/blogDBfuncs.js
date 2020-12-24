const connection = require('./connection')

function getBlogs (db = connection) {
  return db('blogs')
   .select()
}

module.exports = {
  getBlogs
}
