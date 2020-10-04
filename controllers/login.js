const express = require('express');
const router = express.Router();
const db = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');

router.post('/', [
    check('username', 'Please include a valid username').exists(),
    check('password', 'Password required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { username, password } = req.body
    try {

        const user = await db.User.findOne({username});
        if (!user) {
            return res.status(400).json({msg:'Password or email incorrect.'})
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({msg:'Password or email incorrect.'})
        }
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, config.get('jwtSecret'),
        {expiresIn: 36000 },
        (err, token) => {
            if(err) throw err;
            res.json({ token })
        })
    } catch(err) {
        res.send({message: 'Internal Server Error'})
    }
})

module.exports = router;

