const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth')





// Shows all profiles with the exception of the current User
router.get('/', auth, async (req, res) => {
    try {
        const profiles = await db.User.find({}).select('-password') 
        res.json({ profiles })
    } catch(err) {
        res.status(500).send({ msg: 'An error occured.' })
    }
})

module.exports = router;

