const express = require("express"); // import {express} from 'express
const app = express();
const port = 3000;
const userRoute = require("./routes/users.route"); //load the route into app
const collectionRoute = require("./routes/collection.route");

app.use(express.json()); //define app will accept request in json (body parser)
app.use("/collection", collectionRoute);
app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
