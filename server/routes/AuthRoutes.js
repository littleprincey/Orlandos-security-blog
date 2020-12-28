
const express = require('express')
const router = express.Router()

const { applyAuthRoutes } = require('authenticare/server')


const {
  userExists,
  getUserByName,
} = require('../db/AuthDBFuncs')



applyAuthRoutes(router, {
  userExists,
  getUserByName,
})


module.exports = router

