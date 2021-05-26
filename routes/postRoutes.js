const postController = require('../controllers/postController')

const express = require('express')
const postRoutes = express.Router()

postRoutes.post('/', postController.create)


module.exports = postRoutes