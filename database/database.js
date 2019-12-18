const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const uri = `mongodb+srv://olutobiogunsola:${process.env.MONGO_PASSWORD}@notewriterdb-epoyx.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('An error occured. Database not connected');
});

db.once('open', () => {
  console.log('Database successfully connected');
});

module.exports = mongoose;
