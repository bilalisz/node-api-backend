const express = require('express');
const {
    readData,
    readDataById,
    postData,
    deleteData,
    updateData,
} = require('./callback');
const router = express.Router();

const db = require('../Database/db');

router.get('/user', readData);
router.get('/user/:id', readDataById);
router.delete('/user/delete/:id', deleteData);
router.post('/user/insert', postData);
router.put('/user/update/:id', updateData);

module.exports = router;