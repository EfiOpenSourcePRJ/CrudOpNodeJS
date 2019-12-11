const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./db');

const productRoute = require('./routes/product.route');
mongoose.Promise = global.Promise;


mongoose.connect(config.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).
catch(error => handleError(error));


function handleError(error)
{
    console.log(config.DB);
    console.log(error);
}


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/products', productRoute);
const port = process.env.PORT || 4000;

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});