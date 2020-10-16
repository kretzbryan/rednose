const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');


router.post('/register', [
    check('firstName', 'First Name is required').not().isEmpty(),
    check('lastName', 'Last Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
        let foundUser = await db.User.findOne({email});
        if (foundUser) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
        }
        const salt = await bcrypt.genSalt(10);
        hash = await bcrypt.hash(password, salt);
        req.body.password = hash;
        const newUser = await db.User.create(req.body);
        res.send('User registered');
    } catch (err) {
        console.log(err.message),
        res.status(500).send('Internal Server Error')
    } 
});

router.post('/login', [
            check('username', 'Please include a valid username').exists(),
            check('password', 'Password required').exists()
        ], 
        async (req, res) => {
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

router.get('/home', auth, async (req, res) => {
    try {
        const user = await db.User.findById(req.user.id).select('-password');
        res.json({ user })
    } catch (err) {
        if(err) {
            res.status(500).json({message: 'An error occurred. Please try again .'})
        }
    }
})
router.delete('/logout', async function(req, res){
})

module.exports = router;