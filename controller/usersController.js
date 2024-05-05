const conn = require("../database/mysql"); // db module
const { StatusCodes } = require("http-status-codes"); // status code module
const jwt = require("jsonwebtoken"); // jwt module
const dotenv = require("dotenv"); // dotenv module
dotenv.config();

// 회원가입
const signup = (req, res) => {
  try {
    const { name, email, password } = req.body;
  } catch {
    return res.status(StatusCodes.BAD_REQUEST).end();
  }
};

module.exports = { signup };
