const users = [];

const addUsers = (user) => {
  users.push(user);
  return user;
}

const getUser = (email) => {
 const userDetails = users.filter(user =>  user.userEmail === email );
 return userDetails[0];
} 

module.exports = {
  addUsers,
  getUser
}