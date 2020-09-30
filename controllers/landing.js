const express = require('express');
const mongo = require('mongodb')
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');
const Grid = require('gridfs-stream');
const mongoose= require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');

const mongoURI = 'mongodb://localhost:27017/circusnetwork';
const conn = mongoose.createConnection(mongoURI);

let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('profileImages');
})



router.get('/', (req, res) => {
    if(req.session.currentUser) {
        db.User.findById(req.session.currentUser.id, (err, foundUser) => {
            if(err) {
                console.log(err)
            } else {
                res.render('landing', {currentUser: foundUser});
            }
        })
    } else {
        res.render('landing', {currentUser: null})
    }
})



// Creates a json list of uploaded files
router.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        if(!files) {
            res.render('landing', {files: false})
        }
        return res.json(files)
    })
})




// logs in user and creates cookie for logged user
router.get('/login', async function(req, res){
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


// logs out user
router.delete('/logout', async function(req, res){
    await req.session.destroy();
    res.redirect('/')
})


module.exports = router;
