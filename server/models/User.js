const mongoose = require('mongoose');
const { Schema } = mongoose; // Schema = mongoose.Schema

const userSchema = new Schema({
	googleId: String,
});

mongoose.model('users', userSchema); //create the collection using define schema

