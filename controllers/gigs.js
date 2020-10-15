const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth')

router.get('/', auth, async (req, res) => {
    try {
        const gigs = await db.Gig.find().sort({'createdAt': -1});
        res.json(gigs)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
        
})

module.exports = router;