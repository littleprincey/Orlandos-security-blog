
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert([
        {
          id: 1, 
          title: 'podcasts, podacasts, podcasts', 
          content: 'firstly, there are a TONNE of incredible security podcasts out there! it was so exciting to discover this rich source of learning and entertainment. I started off with a newbie podcast called Hackable. ', 
          date: '22.12.2020'
        },
        {
          id: 2, 
          title: '', 
          content: '', 
          date: ''
        },
        {
          id: 3, 
          title: '', 
          content: '', 
          date: ''
        }
      ]);
    });
};
