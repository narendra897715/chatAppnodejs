var express = require('express');
var router = express.Router();
 const {sql, poolPromise} = require('../bin/dbConn'); 
// const  = require('../bin/dbConn');
/* GET home page. */
router.get('/getFriendslist', function(req, res, next) {
    new sql.Request(poolPromise).input('loginId', sql.Numeric, req.query.loginId)
                                .execute('[spGetFriendsList]', (err, result)=>{
                                  if(err) {
                                    console.log(err);
                                  } else {
                                    res.json(result.recordset);
                                  }
                                })
   
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

module.exports = router;