import mongoose from 'mongoose';
import dotenv from 'dotenv';

(async () => {
  await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
})();

const db = mongoose.connection;

db.on('error', () => {
  console.log('An error occured. Database not connected');
});

db.once('open', () => {
  console.log('Database successfully connected');
});

export default mongoose;
