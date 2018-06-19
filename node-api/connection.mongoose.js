/*DB Connectivity*/

//Dependencies
const mongoose = require('mongoose');

const dbName = "EasyDonateApp";
const port = "27017";

//Connecting to MongoDB
mongoose.connect(`mongodb://localhost/${dbName}`, () => {
    console.log(`Connected to MongoDB: ${dbName}, PORT: ${port}`);
});