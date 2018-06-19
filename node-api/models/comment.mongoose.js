//Dependencies
const mongoose = require('mongoose');

//Comment Schema
const commentSchema = mongoose.Schema(
    {
        //commentId --> auto-generated

        userId: 
        {
            type: String,
            required: true
        },
        postId:
        {
            type: String,
            required: true
        },
        commentText:
        {
            type: String,
            required: true,
            default: "<New comment>"
        },
        commentLikes:
        {
            type: Number,
            required: true,
            default: 0
        }
    }
);

const CommentModel = exports.CommentModel = mongoose.model('CommentModel', commentSchema);

/*Functions to handle Http Requests*/