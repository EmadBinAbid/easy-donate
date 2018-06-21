/*
Author: Emad Bin Abid
Start day: Tuesday, June 19' 2018
*/

//Dependencies
const mongoose = require('mongoose');
const config = require('../config');

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
            type: Array,
            required: true,
            default: []
        },
        createdOn:
        {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

const CommentModel = exports.CommentModel = mongoose.model('CommentModel', commentSchema);

/*Functions to handle Http Requests*/

//addComment
/*
method: addComment(expressInstance, jwtInstance, verifyToken)
url: domain/comment
request object: expects a json object of type { "comment": object }
response object: sends a json object of type { "comment": object }. If error, then sends "Not Acceptable"
*/
exports.addComment = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.post('/comment', verifyToken, (req, res) => 
    {
        jwtInstance.verify(req.token, config.secret_key, ( err, userData ) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const newComment = {
                    "userId": userData.user._id,
                    "postId": req.body.comment.postId,
                    "commentText": req.body.comment.commentText
                };

                CommentModel.create(newComment, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(406).send("Not Acceptable");
                    }
                    else
                    {
                        res.json({ "comment": dbObject });
                    }
                });
            }
        });
    });
}

//updateComment
/*
method: updateComment(expressInstance, jwtInstance, verifyToken)
url: domain/comment?commentId
request object: expects a query string with key = commentId and a json object of type { comment: object }
response object: sends a json object of type { "comment": object }. If error, then sends "Unauthorized"
*/
exports.updateComment = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.put('/comment', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.secret_key, ( err, userData ) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const options = {"new": true};
                CommentModel.findOneAndUpdate({ "userId": userData.user._id, "_id": req.query.commentId }, req.body.comment, options, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json( { "comment": dbObject } );
                    }
                });
            }
        });
    });
}

//deleteComment
/*
method: deleteComment(expressInstance, jwtInstance, verifyToken)
url: domain/comment?commentId
request object: expects a query string with key = commentId
response object: sends a json object of type { "comment": object }. If error, then sends "Unauthorized"
*/
exports.deleteComment = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.delete('/comment', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.secret_key, ( err, userData ) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                CommentModel.remove( { "userId": userData.user._id, "_id": req.query.commentId }, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json( {"comment": dbObject} );
                    }
                } );
            }
        });
    });
}

//getComment
/*
method: getComment(expressInstance, jwtInstance, verifyToken)
url: domain/comment?commentId
request object: expects a query string with key = commentId
response object: sends a json object of type { "comment": object }. If error, then sends "Unauthorized"
*/
exports.getComment = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.get('/comment', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.secret_key, ( err, userData ) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                CommentModel.findOne( { "userId": userData.user._id, "_id": req.query.commentId }, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json({ "comment": dbObject });
                    }
                } );
            }
        });
    });
}

//getAllComments
/*
method: getAllComments(expressInstance, jwtInstance, verifyToken)
url: domain/comment/all-comments
request object: null
response object: sends a json object of type { "comment": array_of_objects }. If error, then sends "Unauthorized"
*/
exports.getAllComments = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.get('/comment/all-comments', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.secret_key, (err, userData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                CommentModel.find( (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json({ "comment": dbObject });
                    }
                } );
            }
        });
    });
}