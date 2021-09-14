require("dotenv").config();

const express = require("express");
const app = express();


/*Routers*/
const articlesRouter = require("./articles/articles.router");



/*View Engine for server side rendering*/
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false})); //Allows for body's to be attached to req and res.
app.get('/', (req,res) => {//Landing page is /articles
    res.redirect('/articles');
})

/*Main*/
app.use("/articles", articlesRouter);



module.exports = app;
