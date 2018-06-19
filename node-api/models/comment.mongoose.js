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

//addComment
exports.addComment = function(expressInstance)
{
    expressInstance.post('/comment', (req, res) => {

    });
}

//updateComment
exports.updateComment = function(expressInstance)
{
    expressInstance.put('/comment', (req, res) => {

    });
}

//deleteComment
exports.deleteComment = function(expressInstance)
{
    expressInstance.delete('/comment', (req, res) => {

    });
}

//getComment
exports.getComment = function(expressInstance)
{
    expressInstance.get('/comment', (req, res) => {

    });
}