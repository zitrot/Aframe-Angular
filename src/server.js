const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/Angular10-AFRAME'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/Angular10-AFRAME/index.html'));
});