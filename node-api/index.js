/*
Author: Emad Bin Abid
Start day: Friday, June 15' 2018
*/

//Application dependencies
const server = require('./server');
const connection = require('./connection.mongoose');
const login = require('./login.mongoose');
const userModel = require('./models/user.mongoose');
const postModel = require('./models/post.mongoose');
const commentModel = require('./models/comment.mongoose');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

/*Http Requests*/

//userModel
userModel.addUser(app);
userModel.updateUser(app);
userModel.deleteUser(app);
userModel.getUser(app);
userModel.getAllUsers(app);

//postModel
postModel.addPost(app, jwt, login.verifyToken);
postModel.updatePost(app, jwt, login.verifyToken);
postModel.deletePost(app, jwt, login.verifyToken);
postModel.getPost(app, jwt, login.verifyToken);
postModel.getAllPosts(app, jwt, login.verifyToken);

//commentModel
commentModel.addComment(app, jwt, login.verifyToken);
commentModel.updateComment(app, jwt, login.verifyToken);
commentModel.deleteComment(app, jwt, login.verifyToken);
commentModel.getComment(app, jwt, login.verifyToken);
commentModel.getAllComments(app, jwt, login.verifyToken);
commentModel.getAllCommentsByPostId(app);

//Validating User and generating JWT if User is valid.
login.validateUser(app, jwt, userModel.UserModel);

//Running the server
server.run(app, 3000);