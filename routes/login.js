const bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();
const {sql, poolPromise} = require('../bin/dbConn'); 
router.post('/verifyUser', function(req, res, next) {

    var data = req.body;

    const request = new sql.Request(poolPromise)
          .input('emailid', sql.NVarChar, data.emailid)
          .input('password', sql.NVarChar, data.password).query('select * from Users where emailId = @emailid'
      , function (err, records) {
           
           if (err)  console.log(err)
          
           // send records as a response
           if(records.recordset.length === 0) {
            res.json({message: "Email Id is not register", status : false})
           } else {
            var status = bcrypt.compareSync(data.password, records.recordset[0].password);
               if(status) {
                   res.json(
                       {message: "Login Successful", status : true, userData : records.recordset[0]});
               } else {
                   res.json({message : "Invalid password", status : false, userData : records.recordset[0]});
               }
           }
    
           
        });
  
});

module.exports = router;