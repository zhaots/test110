const mysql = require('mysql');
exports.base = (sql,data,callback) =>{
    const connection = mysql.createConnection({
        host     : '49.232.144.49',
        user     : 'book',
        password : '123que',
        database : 'mybooks'
      });
       
      connection.connect();
      
      connection.query(sql,data,(error, results, fields) => {
        if (error) throw error;
        callback(results);
      });
      connection.end();
};