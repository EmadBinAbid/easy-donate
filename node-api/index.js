//Application dependencies
const server = require('./server');
const connection = require('./connection.mongoose');
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

//postModel
postModel.addPost(app);
postModel.updatePost(app);
postModel.deletePost(app);
postModel.getPost(app);

//commentModel
commentModel.addComment(app);
commentModel.updateComment(app);
commentModel.deleteComment(app);
commentModel.getComment(app);

//Validating User and generating JWT if User is valid.
userModel.validateUser(app, jwt);

//Running the server
server.run(app, 3000);