
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');


router.get('/:id', auth,  async (req, res) => {
    try {
        const foundProfile = await db.User.findById(req.params.id).select('-password').populate('posts').populate('gigs');
        res.status(200).json({profile: foundProfile})
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