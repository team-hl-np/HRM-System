const mongoose = require('mongoose');
require('dotenv').config();
try{
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Successfully connnected to mongoDB ..!!"))
    .catch(error => console.log("Failed to connect to MongoDB !!", error));
}catch(err){
    console.log(err);
};
