const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Post.find({} ,(err, posts) => {
        if (err) {
            res.status(200).json({ message: 'Internal Server Error' })
        } else {
            res.status(200).json({ posts })
        }
    })
})

module.exports = router;
