const usersController = require('../controllers/usersController')

const express = require('express')
const usersRoutes = express.Router()

usersRoutes.post('/', usersController.create)
usersRoutes.post('/login', usersController.login)
usersRoutes.get('/verify', usersController.verify)
usersRoutes.delete('/profile', usersController.deleteUser)
// usersRoutes.post('/cart', usersController.addToCart)
// usersRoutes.get('/cart', usersController.getCart)
// usersRoutes.delete('/cart/:id', usersController.removeProduct)

module.exports = usersRoutes