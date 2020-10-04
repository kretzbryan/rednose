const express = require('express');
const router = express.Router();
const db = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth')

router.get('/', auth, async (req, res) => {
    const { username, password } = req.body;
    try {

        const foundUser = await db.User.findOne({username});
        if (!foundUser) {
            return res.status(400).json({message:'Password or email incorrect.'})
        }
        const match = await bcrypt.compare(password, foundUser.password);
        if (!match) {
            return res.status(400).json({message:'Password or email incorrect.'})
        }
        const payload = {
            user: {
                id: foundUser._id
            }
        }
        
        jwt.sign(payload, config.get('jwtSecret'),
        {expiresIn: 36000 },
        (err, token) => {
            if(err) throw err;
            res.json({ token})
        })
    } catch(err) {
        res.send({message: 'Internal Server Error'})
    }
})

module.exports = router;