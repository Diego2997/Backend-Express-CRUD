const express = require("express");

const api = express.Router();
const { userController, fiboController } = require("../controllers");

api.get("/users", userController.getUsers);
// api.get("/users/:id", userController.getOneUser);
api.post("/users", userController.createUser);
api.put("/users/:id", userController.updateUser);
api.delete("/users/:id", userController.deleteUser);

api.get("/fibo", fiboController.fibonnacci);
module.exports = api;
