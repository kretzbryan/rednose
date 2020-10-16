const express = require('express');
const router = express.Router();
const path = require('path');
const crypto = require('crypto');
const db = require('../models');
const auth = require('../middleware/auth')
const { check, validationResult } =  require('express-validator');
const { globalAgent } = require('http');
const { findByIdAndUpdate } = require('../models/Gig');







// User Home Page
router.get('/', auth, async (req, res) => {
        try {
            const currentUser = await db.User.findById(req.user.id).select('-password');
            const allPosts = await db.Post.find({}).populate('author');
            const allGigs = await db.Gig.find({}).populate('author');
            // res.status(200).json({gigs: allGigs, posts: allPosts})
            res.json({ currentUser: currentUser})
        } catch (err) {
            if(err) {
                res.status(500).json({message: 'An error occurred. Please try again .'})
            }
        }
})



// Creates a post with author id, adds post id to User.posts
router.post('/add-post', 
    [
        auth,
        [
            check('text', 'text is required').not().isEmpty()
        ]
    ], async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            const user = await db.User.findById(req.user.id).select('-password');
            const newPost = new db.Post({
                text: req.body.text,
                name: `${user.firstName} ${user.lastName}`,
                user: req.user.id
            });
            const post = await newPost.save();
            res.json(post)
        } catch (err) {
            if(err) {
            return res.status(500).send('server error')
            }
        }
      
})


// Creates gig with author Id, adds gig id to user.Gigs
router.post('/add-gig',
    [
            auth,
            [
                check('title', 'title is required').not().isEmpty(),
                check('location', 'location required').not().isEmpty(),
                check('text', 'text is required').not().isEmpty(),
            ]
    ] , async (req, res) => {

        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array() });
        }

        try {
            const user = await db.User.findById( req.user.id ).select('-password');

            const newGig = new db.Gig({
                title: req.body.title,
                location: req.body.location,
                text: req.body.text,
                name: `${user.firstName} ${user.lastName}`,
                user: req.user.id
            })
            const gig = newGig.save();
            res.json(gig)
        } catch(err) {
            res.status(500).json({ msg: 'An error occured, please try again.' })
        }

})


router.put('/edit-profile/:id', (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/home');
        }
    })
})

router.put('/edit-gig/:id', auth, async (req, res) => {
   try {
    const { title, location, text, user } = req.body
        if(req.user.id !== user) {
           res.status(401).json({ msg: 'User not Authorized'});
       }
        const gig  = await db.Gig.findByIdAndUpdate(
            req.params.id, 
            {
                title,
                location,
                text
            },
            { new: true }
        );
        res.json(gig)
   } catch (err) {
       res.status(500).json({ err })
   }
})

router.put('/edit-post/:id', (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPost) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/home');
        }
    })
})



// Delete Gig
router.delete('/delete-gig/:id', auth, async (req, res) => {
    try {
        const gig = await db.Gig.findById(req.params.id);
        
        if(gig.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
})

router.delete('/delete-post/:id', auth, async (req, res) => {
    try {
        const post = await db.Post.findById(req.params.id);
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json('User not authorized')
        }
        await post.remove();
        res.json({ msg: 'Post removed' })
    } catch (err) {
        
       res.status(500).json({ err })
    }
})



module.exports = router;