const bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();
const {sql, poolPromise} = require('../bin/dbConn'); 
router.post('/addUsers', function(req, res, next) {

    var data = req.body;
    data.password = bcrypt.hashSync(data.password, 10);
    // res.send("successfully addedd");
    console.log(data);
    const request = new sql.Request(poolPromise)
          .input('firstName', sql.NVarChar, data.firstName)
          .input('lastName', sql.NVarChar, data.lastName)
          .input('emailId', sql.NVarChar, data.emailId)
          .input('password', sql.NVarChar, data.password)
    
    .query('insert into Users (firstName,lastName,emailId,password)' +
      'values (@firstName, @lastName, @emailId, @password)', function (err, recordset) {
           
           if (err) console.log(err)

           // send records as a response
           res.json("successfully addedd");
           
        });
  
});

module.exports = router;