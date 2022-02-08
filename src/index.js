const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/static'));

const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
