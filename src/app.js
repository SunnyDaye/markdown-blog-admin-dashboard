require("dotenv").config();

const express = require("express");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");

/*Routers*/
const articlesRouter = require("./articles/articles.router");

/*View Engine for server side rendering*/
app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: false })); //Allows for body's to be attached to req and res.
app.use(methodOverride('_method'));
app.get("/", (req, res) => {
  //Landing page is /articles
  res.redirect("/articles");
});

/*Main*/
app.use("/articles", articlesRouter);

//Not found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

//Error handlers
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
