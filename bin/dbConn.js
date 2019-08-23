var sql = require("mssql");

// var config = {
//     driver: "msnodesqlv8",
//     server: 'RPILMASQL002',
//     database: 'chatAppdb',
//     options: {
//         trustedConnection: true,
//         useUTC: true
//     }
// };


// var config = {
//     user: 'narenpc',
//     password: 'Software@123',
//     server: 'USER-PC',
//     database: 'chatAppdb',
//     options: {
//       encrypt: false // Use this if you're on Windows Azure
//   }
//   };

    // config for your database
    var config = {
      user: 'newLogin',
      password: 'Keyboard@123456',
      server: 'RPILMASQL002',
      database: 'chatAppdb',
      options: {
        encrypt: false // Use this if you're on Windows Azure
    }
    }; 

const poolPromise = new sql.ConnectionPool(config, function (err) {

    if (err) console.log(err);

});

module.exports = {sql, poolPromise} ;

