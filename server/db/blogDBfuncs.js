const connection = require('./connection')

function getBlogs (db = connection) {
  return db('blogs')
   .select()
}

//CREATE (Single Resource)
function addBlog(newBlog, db = connection){
  return db('blogs').insert(newBlog)
  .then(ids => ids[0])
}

module.exports = {
  getBlogs,
  addBlog
}
