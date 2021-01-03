const connection = require('./connection')

module.exports = {
  // userExists,
  getUserByName
}


// function userExists (name, db = connection) {
//   return db('admin')
//     .count('id as n')
//     .where('name', name)
//     .then(count => {
//       return count[0].n > 0
//     })
// }

function getUserByName (username, db = connection) {
  return db('admin')
    .select()
    .where('username', username)
    .first()
}