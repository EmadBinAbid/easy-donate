/*
Author: Emad Bin Abid
Start day: Tuesday, June 19' 2018
*/

/*DB Connectivity*/

//Dependencies
const mongoose = require('mongoose');

const dbName = "EasyDonateApp";
const port = "27017";

//Connecting to MongoDB
mongoose.connect(`mongodb://localhost/${dbName}`, (err) => 
{
    if(err)
    {
        console.log(`Error in MongoDB connection: ${dbName}, PORT: ${port}`);
    }
    else
    {
        console.log(`Connected to MongoDB: ${dbName}, PORT: ${port}`);
    }
});