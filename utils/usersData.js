const users = [];

const addUsers = (user) => {
  users.push(user);
  return user;
}

const getUser = (email) => {
  console.log(users);
  console.log(email);
  console.log(users[1].userEmail === email);
 const userDetails = users.filter(user =>  user.userEmail === email );
 console.log(userDetails);
 return userDetails[0];
} 

module.exports = {
  addUsers,
  getUser
}