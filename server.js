const express = require("express"); // import {express} from 'express
const app = express();
const port = 3000;
app.use(express.json()); //define app will accept request in json (body parser)

//route endpoint - REST API endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/authenticate", function cb(request, response) {
  console.log(request.body);
  response.status(200).send("autheticate fail");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
