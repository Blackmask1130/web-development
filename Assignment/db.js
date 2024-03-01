const mongoose = require('mongoose');
const connect = () => {
 mongoose.connect('mongodb://localhost:27017/your_database_name', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 });
 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
 module.exports = { connect }