const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('admin').del()
    
    .then(() => 
      
      knex('admin').insert([
        
        {
          id: 1, 
          username: 'Orlando', 
          hash: '$argon2id$v=19$m=65536,t=2,p=1$sWz/et8t85zYfsqjKYU3Ag$7TQbIeXQUekcKWgiCUwmUVc+MHFfH5YbfwBiFTbXnUo', 
        }
        
      ])
    )
  
}
