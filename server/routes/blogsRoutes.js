const express = require('express')

const { getBlogs } = require('../db/blogDBfuncs')

const router = express.Router()

router.get('/blogs', (req, res) => {
  getBlogs()
    .then(blogs => {
      res.json(blogs)
      // console.log(blogs)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})


module.exports = router
