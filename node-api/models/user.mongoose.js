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
        },
        password:
        {
            type: String,
            required: true
        }
    }
);

const UserModel = exports.UserModel = mongoose.model('UserModel', userSchema);

/*Functions to handle Http Requests*/

//addUser
exports.addUser = function(expressInstance)
{
    expressInstance.post('/user', (req, res) => {
        
    });
}

//updateUser
exports.updateUser = function(expressInstance)
{
    expressInstance.put('/user', (req, res) => {

    });
}

//deleteUser
exports.deleteUser = function(expressInstance)
{
    expressInstance.delete('/user', (req, res) => {

    });
}

//getUser
exports.getUser = function(expressInstance)
{
    expressInstance.get('/user', (req, res) => {
        
    });
}