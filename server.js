const express = require("express");
const mogoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/post");

const app = express();

//DB config
const db = require("./config/keys").mongoUri;

//Connect to mongoDB
mogoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MogoDB connected..."))
  .catch(error => console.log(erros));

app.get("/", (req, res) => res.send("Hello World"));

//Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
