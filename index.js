const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log("Request received");
    // res.send('Welcome');
    res.json({msg: "Welcome using JSON"});
});

app.listen(1234, () => {
    console.log("Server is up and running on port 1234");
});