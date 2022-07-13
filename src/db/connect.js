const mongoose = require('mongoose')
const connectionString = 'mongodb://admin:password@mongodb:27017'

const connectDB = async (url) => {
    await mongoose.connect(connectionString)
        .then(() => console.log('Connected successssssssssss'))
        .catch((err) => console.log(err, 'errrrrrrrrr'))
}

module.exports = connectDB