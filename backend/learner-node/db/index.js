const mongoose = require('mongoose')
const { DB_URL } = require('./config.json');

//to connect to db
const initDB = () => {
    mongoose.connect(DB_URL);
    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error)
    })

    database.once('connected', () => {
        console.log('Database connected successfully');
    })
}

module.exports = { initDB }