const asyncErrorBoundary = require('../errors/asyncErrorBoundary');
const service = require('./articles.service');
const slugify = require('slugify');

const list = async (req,res) => {
    const articles = await service.list();
      res.render("articles/index.ejs", { articles });
}

const create = async (req,res) => {
    const article = {...req.body, slug: slugify(req.body.title,{lower: true, strict: true})};
    const newArticle = await service.create(article);
}

const read = async (req, res) => {
    const article = await service.read(req.params.slug);
    console.log(article);
    res.render('articles/show.ejs', {article});
}


const renderNewScreen = (req,res) => {
    res.render('articles/new');
}

//exports are structured like this so middleware is easier to add
module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
    read: asyncErrorBoundary(read),
    renderNewScreen: renderNewScreen,
}