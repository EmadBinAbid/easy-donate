/*
Author: Emad Bin Abid
Start day: Tuesday, June 19' 2018
*/

//Dependencies
const mongoose = require('mongoose');

//Post Schema
const postSchema = mongoose.Schema(
    {
        //postId --> auto-generated

        userId: 
        {
            type: String,
            required: true
        },
        donationType: 
        {
            type: String,
            required: true
        },
        postText:
        {
            type: String,
            required: true,
            default: "<New post>"
        },
        postLikes:
        {
            type: Array,
            required: true,
            default: []
        }
    }
);

const PostModel = exports.PostModel = mongoose.model('PostModel', postSchema);

/*Functions to handle Http Requests*/

//addPost
exports.addPost = function(expressInstance)
{
    expressInstance.post('/post', (req, res) => {

    });
}

//updatePost
exports.updatePost = function(expressInstance)
{
    expressInstance.put('/post', (req, res) => {

    });
}

//deletePost
exports.deletePost = function(expressInstance)
{
    expressInstance.delete('/post', (req, res) => {

    });
}

//getPost
exports.getPost = function(expressInstance)
{
    expressInstance.get('/post', (req, res) => {

    });
}