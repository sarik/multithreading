var express = require('express');
var app = express();

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.post('/ax', (req, res) => {
    res.status(204).send('Hello World, from express');
});

app.listen(3001);