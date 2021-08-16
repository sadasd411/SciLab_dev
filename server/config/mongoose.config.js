//connect to the mongo server
const mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
const dbName ="sciLab";

mongoose.connect('mongodb://localhost/' + dbName,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("Connected with mongo database:" +dbName))
.catch((err) => console.log("Something went wrong connecting to the DB:" +err))