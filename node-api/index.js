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

//Running the server
server.run(app, 3000);