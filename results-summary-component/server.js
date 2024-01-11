const express = require("express");
const app = express();
const port = 3000;
const dir = `${__dirname}/`;

app.get("*", (req, res) => {
  res.sendFile(dir + "index.html");
});

app.listen(port, () => console.log(`I am listening on port ${port}!`));
