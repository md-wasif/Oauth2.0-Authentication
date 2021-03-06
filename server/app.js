const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const passport = require('passport');
const cors = require('cors');



connectDB();


const app = express();

// parse application/json
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());

//Routes
app.use('/users', require('./routes/userRoute'));

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})