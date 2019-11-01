const {sql, poolPromise} = require('../bin/dbConn'); 

exports.getFriendsList = async(data) => {
    return new Promise((resolve,reject)=>{
        new sql.Request(poolPromise).input('loginId', sql.Numeric, data.loginId)
        .execute('[spGetFriendsList]', (err, result)=>{
          if(err) {
            reject(err);
          } else {

            resolve(result.recordset);
          }
        })
    })
   
}

exports.insertMessages = async(data) => {
    console.log(data);
    return new Promise((resolve, reject)=> {
        for(var i =0 ; i<data.length ; i++) {
            new sql.Request(poolPromise).input('sentById', sql.Numeric, data[i].sentById)
            .input('sendToId', sql.VarChar, data[i].sendToId)
            .input('messageContent', sql.NVarChar, data[i].message)    
            .query('insert into Messages values (@sentById,@sendToId,@messageContent)', (err, result)=>{
              if(err) {
                 console.log(err);
                reject(err);
              } else {
                console.log(result);
              }
            })
        }
        
        resolve("success");
    })
}

exports.getMessages = async(data) => {
    return new Promise((resolve,reject)=>{
        new sql.Request(poolPromise).input('sentById', sql.Numeric, data.sentById)
        .input('sentById', sql.Numeric, data.sentById)
        .execute('[spGetMessages]', (err, result)=>{
          if(err) {
            reject(err);
          } else {

            resolve(result.recordset);
          }
        })
    })
}