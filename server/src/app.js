const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined')); // logs the device that accesses the endpoint
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `user ${req.body.email} is now registered`
    });
});
app.listen(process.env.PORT || 8081);
