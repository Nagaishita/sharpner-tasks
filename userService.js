const getAllUsers = () => {
  return "Fetching all users";
};

const getUserById = (id) => {
  return `Fetching user with ID: ${id}`;
};

const addUser = () => {
  return "Adding a new user";
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
