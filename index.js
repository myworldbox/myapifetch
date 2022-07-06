const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// prettify json
app.set("json spaces", 2);

// send alive status as json on '/' endpoint
app.get('/', (req, res) => {
    res.json({ alive: true });
    console.log("baseUrl")
});

app.get('/api', (req, res) => {
    console.log("get api")
});

app.post('/api', (req, res) => {
    console.log("post api")
    req.body.map((data, i) => console.log(i + 1, " -> [", data, " ]"))
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
