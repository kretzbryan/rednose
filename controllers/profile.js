
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');
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

router.get('/:id', auth,  async (req, res) => {
    try {
        const foundProfile = await db.User.findById(req.params.id).select('-password').populate('posts').populate('gigs');
        const currentUser = await db.User.findById(req.session.currentUser.id)
        res.status(200).json({currentUser: currentUser, profile: foundProfile})
    } catch(err) {
        console.log(err)
        res.status(500).send('Server error')
}
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedUser = await db.User.findByIdAndDelete(req.params.id);
        const deletedPosts = await db.Post.remove({ author: deletedUser._id });
        const deletedGigs = await db.Gig.remove({ author: deletedUser._id });
    } catch (err) {
        console.log(err);
    }

})

module.exports = router;