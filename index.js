const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express() 

const port = process.env.PORT || 4000;

// prettify json
app.set("json spaces", 2);

app.use(cors());
app.use(bodyParser.json());

// send alive status as json on '/' endpoint
app.get('/', (req, res) => {
    console.log("get -> [ / ]")
    res.json({ alive: true });
});

app.get('/api', (req, res) => {
    console.log("get -> [ /api ]")
});

app.post('/api', (req, res) => {
    console.log("post -> [ /api ]")
    req.body.map((data, i) => console.log(i + 1, " -> [", data, " ]"))
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
