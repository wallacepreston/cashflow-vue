const express = require('express'); // Install as dependency
var history = require('connect-history-api-fallback'); // Install as dependency
const path = require('path');
const serveStatic = require('serve-static');
const app = express();
app.use(history())
app.use(serveStatic(__dirname + "/dist"));
const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);