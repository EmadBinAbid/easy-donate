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
            type: Number,
            required: true,
            default: 0
        }
    }
);

const PostModel = exports.PostModel = mongoose.model('PostModel', postSchema);

/*Functions to handle Http Requests*/