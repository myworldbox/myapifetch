const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express()

const port = process.env.PORT || 4000;

var container

app.use(cors());
app.set("json spaces", 2);
app.use(bodyParser.json());

app.get('/', (req, res) => {

    console.log("\nget -> [ / ]")
    res.json({ route: "/" });
});

app.get('/api/get', (req, res) => {

    console.log("\nget -> [ /api/get ]")
    res.json(container);
});

app.post('/api/post', (req, res) => {

    console.log("\npost -> [ /api/post ]")
    res.json(req.body);

    container = req.body

    req.body.map((data, i) => console.log("( ",i + 1, " ) - >>", data, " <<"))
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
