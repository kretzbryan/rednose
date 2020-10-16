const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth');


router.get('/', auth, async (req, res) => {
    try {
        const posts = await db.Post.find().sort({ 'createdAt': -1 });
        res.json(posts)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

router.put('/:id', auth, async (req, res) => {
     try {
        const post = await db.Post.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new:true}
        )
        await post.save();
        console.log(post)
        res.json(post)
     } catch (err) {
         res.json(err.message)
     }
})
module.exports = router;
