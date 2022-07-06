const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// prettify json
app.set("json spaces", 2);

// send alive status as json on '/' endpoint
app.get("/", (_, res) => {
  res.json({ alive: true });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
