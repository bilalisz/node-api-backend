const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const db = require('./Database/db');
const router = require('./Routers/routers');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'key' }));

app.use('/', router);

app.listen(4001, () => {
    console.log('server is running');
});

//dome data

// app.post('/user/insert', function(req, res) {
//     db.query(
//         "INSERT INTO `user`(`Id`, `username`, `email`, `password`) VALUES ('null','khan','khan@g','khan')",
//         function(err, result) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     );
// });