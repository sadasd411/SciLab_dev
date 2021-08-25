const express = require('express');
require("dotenv").config();
const app = express();
const cors = require('cors');
const procedureRouter = require('./controllers/notes.controller');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/procedures", procedureRouter);
require('./config/mongoose.config');

require('./routes/experiment.route')(app);
require('./routes/procedure.route')(app)

app.listen(8000,() => {
    console.log("Your port is running");
});