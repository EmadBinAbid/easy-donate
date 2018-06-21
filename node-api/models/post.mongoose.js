/*
Author: Emad Bin Abid
Start day: Tuesday, June 19' 2018
*/

//Dependencies
const mongoose = require('mongoose');
const config = require('../config');

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
        },
        createdOn:
        {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

const PostModel = exports.PostModel = mongoose.model('PostModel', postSchema);

/*Functions to handle Http Requests*/

//addPost
/*
method: addPost(expressInstance, jwtInstance, verifyToken)
url: domain/post
request object: expects a json object of type { "post": object }
response object: sends a json object of type { "post": object }. If error, then sends "Not Acceptable"
*/
exports.addPost = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.post('/post', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.secret_key, (err, userData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const newPost = {
                    "userId": userData.user._id,
                    "donationType": req.body.post.donationType,
                    "postText": req.body.post.postText,
                    "postLikes": []
                };

                PostModel.create(newPost, (err, dbObject) => 
                {
                    console.log(userData);
                    if(err)
                    {
                        res.status(406).send("Not Acceptable");
                    }
                    else
                    {
                        res.json({ "post": dbObject });
                    }
                });
            }
        });
    });
}

//updatePost
/*
method: updatePost(expressInstance, jwtInstance, verifyToken)
url: domain/post?postId
request object: expects a query string with key = postId and a json object of type { post: object }
response object: sends a json object of type { "post": object }. If error, then sends "Unauthorized"
*/
exports.updatePost = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.put('/post', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.secret_key, (err, userData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const options = {"new": true};
                PostModel.findOneAndUpdate({ "userId": userData.user._id, "_id": req.query.postId }, req.body.post, options, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json( { "post": dbObject } );
                    }
                });
            }
        });
    });
}

//deletePost
/*
method: deletePost(expressInstance, jwtInstance, verifyToken)
url: domain/post?postId
request object: expects a query string with key = postId
response object: sends a json object of type { "post": object }. If error, then sends "Unauthorized"
*/
exports.deletePost = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.delete('/post', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.secret_key, (err, userData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                PostModel.remove( { "userId": userData.user._id, "_id": req.query.postId }, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json( {"post": dbObject} );
                    }
                } );
            }
        });
    });
}

//getPost
/*
method: getPost(expressInstance, jwtInstance, verifyToken)
url: domain/post?postId
request object: expects a query string with key = postId
response object: sends a json object of type { "post": object }. If error, then sends "Unauthorized"
*/
exports.getPost = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.get('/post', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.secret_key, (err, userData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                PostModel.findOne( { "userId": userData.user._id, "_id": req.query.postId }, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json({ "post": dbObject });
                    }
                } );
            }
        });
    });
}

//getAllPosts
/*
method: getAllPosts(expressInstance, jwtInstance, verifyToken)
url: domain/post/all-posts
request object: null
response object: sends a json object of type { "post": array_of_objects }. If error, then sends "Unauthorized"
*/
exports.getAllPosts = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.get('/post/all-posts', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.secret_key, (err, userData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                PostModel.find( (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json({ "post": dbObject });
                    }
                } );
            }
        });
    });
}