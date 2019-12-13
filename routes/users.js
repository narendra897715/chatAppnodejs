var express = require('express');
var router = express.Router();
var service = require('../services/userService')

// const  = require('../bin/dbConn');
/* GET home page. */
router.get('/getFriendslist', async(req, res) => {
    try {
      var data = await service.getFriendsList(req.query);
      res.send(data);
    } catch(err){
      res.status(404).json(err);
    }
   
   
});

router.get('/getUserDetails', async(req, res, next) => {
  console.log(req.query.loginId);
  try {
    var data = await service.getUserDetails(req.query);
    res.json(data);
  }catch(err) {
    console.log(err);
    res.status(404).json(err);
  }
  
   
  
   
});
router.post('/saveMessages', async(req,res, next)=>{
    try {
      var data = await service.insertMessages(req.body);
      res.json("Saved Messae successfully");
    } catch(err) {
      console.log(err);
      res.status(404).json(err);
    }
})

router.post('/fetchMessages', async(req,res, next)=>{
  try {
    var data = await service.getMessages(req.body);
    res.json(data);
  } catch(err) {
    console.log(err);
    res.status(404).json(err);
  }
})

module.exports = router;