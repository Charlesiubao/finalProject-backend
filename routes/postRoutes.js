const postController = require('../controllers/postController')
const multer = require('multer')
const fileUpload = multer()

const express = require('express')
const postRoutes = express.Router()

postRoutes.post('/', postController.create)
postRoutes.get('/all', postController.show)


module.exports = postRoutes