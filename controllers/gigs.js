const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Gig.find({}, (err, gigs) => {
        if(err) {
            res.status(500).json({ message: 'Internal Server Error' })
        } else {
            res.status(200).json({ gigs })
        }
    })
})

module.exports = router;