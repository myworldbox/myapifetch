const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express() 

const port = process.env.PORT || 4000;

// prettify json
app.set("json spaces", 2);

app.use(cors({origin: true}));
app.use(bodyParser.json());

// send alive status as json on '/' endpoint
app.get('/', (req, res) => {

    console.log("get -> [ / ]")

    res.json({ route: "/" });
});

app.get('/api/get', (req, res) => {

    console.log("get -> [ /api/get ]")

    res.json({ route: "/api/get" });
});

app.post('/api/post', (req, res) => {

    console.log("post -> [ /api/post ]")

    res.json({ route: "/api/post" });
    
    req.body.map((data, i) => console.log(i + 1, " -> [", data, " ]"))
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
