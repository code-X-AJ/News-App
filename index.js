// importing libraries and modules to use
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// this would render the index.html file for home page.
app.get('/', (req, res) => {
    res.sendFile('index.html',{root: path.join(__dirname,'./templates') });
})

// server is listening/running in '3000' port.
app.listen(port, ()=>{
    console.log(`Example app listening the port at ${port}`);
})
