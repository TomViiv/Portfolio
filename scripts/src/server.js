var fs = require('fs');
var compression = require('compression');
const express = require('express');
var path = require('path');
const app = express();

const http = require('http').Server(app);
app.use(compression());
app.use(express.static('scripts/client'));
app.use("*", (req, res)=>{
    res.sendFile(path.resolve('scripts/client/index.html'));
})
http.listen(3001, () => {
    console.log('listenning on *:3001');
    console.log("Started Portfolio default server !");
})