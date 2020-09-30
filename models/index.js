const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('mongodb connected!!')
    } catch {
        console.log(err.message);
        // exit process with failure
        process.exit(1);
    }
}


module.exports = module.exports = {
    Gig: require('./Gig'),
    Post: require('./Post'),
    User: require('./User'),
    connectDB: connectDB
}
