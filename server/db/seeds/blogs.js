
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
          title: 'Udemy Course', 
          content: 'this is such a fantastic course, I feel so lucky to be doing it! Zaid is super thorough and i am learning an enormous ammount. We have downloaded virtual box, installed a couple of virtual machines and have setup our pen testing lab. I feel like Mr Robot. the sun is shining but i am deep in the bowels of of kali linux! Also reading a book about whales, which is super interesting...', 
          date: '27.12.2020'
        },
        {
          id: 3, 
          title: 'Ted Talk', 
          content: 'This was an incredibly inspiring talk by Chani Simms. It was wonderful to hear about the humanness and relevance of cyber security from a WoC and made me even more motivated to get into it! https://www.ted.com/talks/chani_simms_stop_chasing_the_magic_security_box', 
          date: '8.1.21'
        }
      ]);
    });
};
