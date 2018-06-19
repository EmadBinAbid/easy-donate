//Dependencies
const mongoose = require('mongoose');

//User Schema
const userSchema = mongoose.Schema(
    {
        //userId --> auto-generated

        firstName: 
        {
            type: String,
            required: true
        },
        lastName: 
        {
            type: String,
            required: true
        },
        email: 
        {
            type: String,
            required: true
        }
    }
);

const UserModel = exports.UserModel = mongoose.model('UserModel', userSchema);

/*Functions to handle Http Requests*/