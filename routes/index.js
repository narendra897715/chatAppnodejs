var express = require('express');
var router = express.Router();
 const {sql, poolPromise} = require('../bin/dbConn'); 
// const  = require('../bin/dbConn');
/* GET home page. */
router.get('/getEmployees', function(req, res, next) {
 
     new sql.Request(poolPromise).query('select * from Employees', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset);
            
        });
   
});

module.exports = router;
