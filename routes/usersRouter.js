const express = require("express"); // express module
const userRouter = express.Router();
const { signup, login } = require("../controller/usersController");

userRouter.use(express.json());

userRouter.post("/signup", signup); // 회원가입
userRouter.post("/login", login); // 로그인

module.exports = userRouter;
