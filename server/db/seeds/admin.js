const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('admin').del()
    .then(() => Promise.all([
      generateHash('iamthegay007')
    ]))
    .then(([orlandoHash]) =>
      knex('admin').insert([
        
        {
          id: 1, 
          username: 'Orlando', 
          hash: orlandoHash, 
        }

       ])
    )
}
