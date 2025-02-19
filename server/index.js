const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || '3000';

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("This is guitar tabs");
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})