const asyncErrorBoundary = require('../errors/asyncErrorBoundary');
const service = require('./articles.service');
const slugify = require('slugify');
const marked = require('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);

const list = async (req,res) => {
    const articles = await service.list();
      res.render("articles/index.ejs", { articles });
}

const create = async (req,res) => {
    const article = {...req.body, slug: slugify(req.body.title,{lower: true, strict: true}),
        sanitizedHtml: dompurify.sanitize(marked(req.body.markdown))};
    const newArticle = await service.create(article);
    console.log(newArticle);
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

const renderEditScreen = async (req, res) => {
    const article = await service.read(req.params.slug);
    res.render('articles/edit.ejs', {article});
}

//exports are structured like this so middleware is easier to add
module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
    read: asyncErrorBoundary(read),
    delete: asyncErrorBoundary(destroy),
    renderNewScreen: renderNewScreen,
    renderEditScreen: asyncErrorBoundary(renderEditScreen),
}