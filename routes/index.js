var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hello world");
  var sql = require("mssql");

    // config for your database
    var config = {
      user: 'narenpc',
      password: 'Software@123',
      server: 'USER-PC',
      database: 'chatAppdb',
      options: {
        encrypt: false // Use this if you're on Windows Azure
    }
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Employees', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

module.exports = router;
