const express = require(‘express’);
const app = express();

app.get(‘/’, (req, res) => {
res.send(‘Welcome to the payment system’);
});

app.listen((7865, () => {
console.log(‘Server listening on port 1245’);
});

module.exports = app;
