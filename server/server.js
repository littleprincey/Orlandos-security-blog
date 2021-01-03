const express = require('express')
const path = require('path')

const blogRoutes = require('./routes/blogsRoutes')
const authRoutes = require('./routes/AuthRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/blogs', blogRoutes)
server.use('/api/v1', authRoutes)


server.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })

module.exports = server