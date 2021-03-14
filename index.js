const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan('combined'));
// app.use(morgan('short'));

app.get('/', (req, res) => {
    console.log("Request received");
    // res.send('Welcome');
    res.json({msg: "Welcome using JSON"});
    res.end();
});

app.listen(1234, () => {
    console.log("Server is up and running on port 1234");
});