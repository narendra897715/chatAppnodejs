var express = require('express');
var router = express.Router();
 const {sql, poolPromise} = require('../bin/dbConn'); 
// const  = require('../bin/dbConn');
/* GET home page. */
router.post('/getFriendslist', function(req, res, next) {
 
    new sql.Request(poolPromise).input('loginId', sql.Numeric, req.body.loginId)
                                .execute('[spGetFriendsList]', (err, result)=>{
                                  if(err) {
                                    console.log(err);
                                  } else {
                                    console.log(result.recordset);
                                    res.json(result.recordset);
                                  }
                                })
   
});

router.post('/getUserDetails', function(req, res, next) {
 
    new sql.Request(poolPromise).input('loginId', sql.Numeric, req.body.loginId)
                                .query('select * from Users where id = @loginId', (err, result)=>{
                                  if(err) {
                                    console.log(err);
                                  } else {
                                    console.log(result.recordset);
                                    res.json(result.recordset[0]);
                                  }
                                })
   
});

module.exports = router;