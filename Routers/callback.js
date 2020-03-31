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
    let insertQuery = 'INSERT INTO user SET ?';

    let postData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    db.query(insertQuery, postData, (err, result) => {
        if (!err) {
            const id = result.insertId;
            res.json(`data is inserted by : ${id}`);
        } else {
            console.log(`error is : ${err}`);
            res.send(err);
        }
        next();
    });
};

const updateData = (req, res, next) => {
    let updateQuery =
        'UPDATE user set username =? , email =? , password = ? where Id =?';
    let updated = [
        req.body.username,
        req.body.email,
        req.body.password,
        req.params.id,
    ];
    db.query(updateQuery, updated, (err, row) => {
        if (!err) {
            res.send('update is successfully ' + updated.name + updated.email);
        } else {
            res.send(err);
        }
    });
};

const deleteData = (req, res, next) => {
    let id = req.params.id;
    deleteQuery = 'delete  from user where Id = ?';
    db.query(deleteQuery, id, (err, result) => {
        if (!err) {
            res.send(`data is delete on ID of : ${id}`);
            console.log(id);
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
    updateData,
};