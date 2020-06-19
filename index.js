import express from "express";
import routes from "./src/routes/crmRoutes.js";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);
app.get("/", (req, res) =>
  res.send(`Node and Express server running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`This awesome server is running on port ${PORT}`)
);
