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

router.get('/getUserDetails', function(req, res, next) {
  new sql.Request(poolPromise).input('loginId', sql.Numeric, req.query.loginId)
  .query('select * from Users where id = @loginId', (err, result)=>{
    if(err) {
      console.log(err);
    } else {
      console.log(result.recordset);
      res.json(result.recordset[0]);
    }
  })
  
   
});
router.post('/saveMessages', async(req,res, next)=>{
    try {
      console.log(req.body);
      var data = await service.insertMessages(req.body);
      res.json("Saved Messae successfully");
    } catch(err) {
      console.log(err);
      res.status(404).json(err);
    }
    

})
module.exports = router;