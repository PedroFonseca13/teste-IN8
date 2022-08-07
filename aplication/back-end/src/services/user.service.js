const userModel = require('../models/user.models');

const getAllUsers = async () => {
  const result = await userModel.getAllUsers();

  return result
}

module.exports = {
  getAllUsers
}
