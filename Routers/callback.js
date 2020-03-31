const db = require('../Database/db');

const readData = (req, res, next) => {
    db.query('select * from user', (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.send(err);
        }
        next();
    });
};

const readDataById = (req, res, next) => {
    db.query('select * from user where id  = ?', req.params.id, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.send(err);
        }
        next();
    });
};

const postData = (req, res, next) => {
    let insertQuery = 'INSERT INTO user SET = ?';

    let postData = {
        username: 'khan',
        email: 'khan@gamil.com',
        password: 'khan',
    };

    db.query(insertQuery, postData, (err, result) => {
        if (!err) {
            res.json(result);
            console.log(`data is inserted ${result}`);
        } else {
            console.log(`error is : ${err}`);
            res.send(err);
        }
        next();
    });
};

const deleteData = (req, res, next) => {
    let id = req.params.id;
    deleteQuery = 'delete * from user where id= ?';
    db.query(deleteQuery, id, (err, result) => {
        if (!err) {
            res.send(`data is delete ${result}`);
            console.log(result);
        } else {
            res.send(err);
            console.log(err);
        }
        next();
    });
};

module.exports = {
    readData,
    readDataById,
    postData,
    deleteData,
};