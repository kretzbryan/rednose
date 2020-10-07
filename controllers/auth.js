const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');




router.get('/', auth, async (req, res) => {
    try {
        const user = await db.User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error...')
    }
})


module.exports = router;
