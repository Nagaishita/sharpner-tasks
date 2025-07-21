const userService = require('../services/userService');

const getAllUsers = (req, res) => {
  res.send(userService.getAllUsers());
};

const getUserById = (req, res) => {
  res.send(userService.getUserById(req.params.id));
};

const addUser = (req, res) => {
  res.send(userService.addUser());
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
