const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const filesRouter = require('./router/filesRouter');
require('dotenv').config();

const PORT = process.env.PORT || 4001;

//don't show the log when it is test
if(process.env.NODE_ENV === 'dev') {
    //use morgan to log at command line
    app.use(logger('dev'));
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

/* Public Directory*/
app.use(express.static('public'));

/* Routes for the system */
app.use('/api/v1/files', filesRouter)

app.listen( PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

module.exports = app;