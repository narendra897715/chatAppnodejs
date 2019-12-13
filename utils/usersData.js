const users = [];

const addUsers = (user) => {
  users.push(user);
  return user;
}

const getUser = (sendToId) => {
 const userDetails = users.filter(user =>  user.userId === sendToId );
 return userDetails[0];
} 

module.exports = {
  addUsers,
  getUser
}