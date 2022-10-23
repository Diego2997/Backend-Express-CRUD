const express = require('express')

const crud = express.Router()
const userController = require('../controllers')


crud.get('/users', userController.getUsers)
crud.get('/users/:id', userController.getOneUser)
crud.post('/users', userController.createUser)
crud.put('/users/:id',userController.updateUser)
crud.delete('/users/:id' , userController.deleteUser)


module.exports = crud