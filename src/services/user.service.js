const { User } = require('./../models/User.model');

const getAllUsers = async () => {
  return User.findAll();
};

const getUserById = async (id) => {
  return User.findByPk(id);
};

const createUser = async (name) => {
  return User.create({ name });
};

const updateUser = async ({ id, name }) => {
  await User.update({ name }, { where: { id } });

  return User.findByPk(id);
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};