const mongoose = require('mongoose');

const password = '';
const dbname = 'mydb';

const uri = `mongodb://127.0.0.1:27017/${dbname}`;

module.exports = () => mongoose.connect(uri);
