const connection = require('./connection');

const getAllUsers = async () => {
  const query = 'SELECT * FROM db_development.users ORDER BY id';
  const [users] = await connection.execute(query);
  return users;
};

module.exports = { getAllUsers }
