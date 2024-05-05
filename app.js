const express = require("express");
const app = express();
const mysql = require("./database/mysql");
const dotenv = require("dotenv");
dotenv.config();

app.listen(process.env.PORT);

const userRouter = require("./routes/usersRouter");

app.use("/users", userRouter);
