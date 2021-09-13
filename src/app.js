require("dotenv").config();

const express = require("express");
const app = express();

/*Routers*/
const articlesRouter = require("./articles/articles.router");

/*View Engine for server side rendering*/
app.set("view engine", "ejs");

/*Main*/
app.use("/articles", articlesRouter);



module.exports = app;
