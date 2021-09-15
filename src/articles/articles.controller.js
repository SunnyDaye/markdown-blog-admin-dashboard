const asyncErrorBoundary = require('../errors/asyncErrorBoundary');
const service = require('./articles.service');

const list = async (req,res) => {
    const articles = await service.list();
    console.log('controller has', articles);
      res.render("articles/index.ejs", { articles });
      res.status(200);
}

const create = async (req,res) => {
    const article = req.body;
    const newArticle = await service.create(article);
    res.status(201);
}

const renderNewScreen = (req,res) => {
    res.render('articles/new');
}

//exports are structured like this so middleware is easier to add
module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
    renderNewScreen: renderNewScreen,
}