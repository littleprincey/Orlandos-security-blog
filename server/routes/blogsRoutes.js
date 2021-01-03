const express = require('express')

const { getBlogs, addBlog } = require('../db/blogDBfuncs')

const router = express.Router()

router.get('/', (req, res) => {
  getBlogs()
    .then(blogs => {
      res.json(blogs)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

// CREATE i.e ADD ONE NEW PLANT 
router.post('/', (req, res) => {
  const newBlog = req.body
  addBlog(newBlog)
  .then(id => {
    res.json({ id: id })
    // .catch(err => {
    //   console.log(err)
    //   res.status(500).json({ message: 'Somthing went wrong' })
    // })
  })
})


module.exports = router
