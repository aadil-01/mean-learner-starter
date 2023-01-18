require('dotenv').config();
const mongoose = require('mongoose')

//to connect to db
const initDB = () => {
    mongoose.connect(process.env.DB_URL);
    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error)
    })

    database.once('connected', () => {
        console.log('Database connected successfully');
    })
}

module.exports = { initDB }