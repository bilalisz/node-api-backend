const express = require('express');
const { readData, readDataById, postData, deleteData } = require('./callback');
// const bodyParser = require('body-parser');
const router = express.Router();
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));
const db = require('../Database/db');

router.get('/user', readData);
router.get('/user/:id', readDataById);
router.delete('/user/delete/:id', deleteData);
router.post('/user/insert', (req, res, next) => {
    let insertQuery = 'INSERT INTO user SET = ?';

    let postData = {
        username: 'khan',
        email: 'khan@gamil.com',
        password: 'khan',
    };

    db.query(insertQuery, postData, (err, result) => {
        if (!err) {
            res.send('successfull');
            console.log(`data is inserted ${result}`);
        } else {
            console.log(`error is : ${err}`);
            res.send(err);
        }
        next();
    });
});

module.exports = router;