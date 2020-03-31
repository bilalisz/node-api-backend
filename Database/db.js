const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my-app',
});
db.connect(err => {
    if (err) {
        console.log(`error ouccure :: error is ${err}`);
    } else {
        console.log('Database is connected !');
    }
});

module.exports = db;