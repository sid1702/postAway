const express = require("express");
const sequelize = require("sequelize");
const app = express();
const cors = require("cors");

const db = require("./models");

app.use(express.json());
app.use(cors());

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentRouter = require("./routes/Comments");
app.use("/comments", commentRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const likesRouter = require("./routes/Likes");
app.use("/likes", likesRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server up");
  });
});
