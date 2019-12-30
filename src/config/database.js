const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('An error occured. Database not connected');
});

db.once('open', () => {
  console.log('Database successfully connected');
});

module.exports = mongoose;
