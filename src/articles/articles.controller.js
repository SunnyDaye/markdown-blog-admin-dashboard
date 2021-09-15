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
    res.redirect('/');
}

const read = async (req, res) => {
    const article = await service.read(req.params.slug);
    console.log(article);
    res.render('articles/show.ejs', {article});
}

const destroy = async (req, res) => {
    const articlesDeleted = await service.delete(req.params.slug);
    console.log(articlesDeleted);
    res.redirect('/');
}

const renderNewScreen = (req,res) => {
    res.render('articles/new.ejs');
}

//exports are structured like this so middleware is easier to add
module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
    read: asyncErrorBoundary(read),
    delete: asyncErrorBoundary(destroy),
    renderNewScreen: renderNewScreen,
}