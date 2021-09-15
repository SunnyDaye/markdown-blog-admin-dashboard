const knex = require('../db/connection');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');
const list = async () => {
    const articles = await knex('articles')
        .select('*');
    return articles;
}
const create = async (article) => {
    const newArticles = await knex('articles')
        .insert(article)
        .returning('*');

    return newArticles[0];
}

const read = async (slug) => {

}
module.exports = {
    list: list,
    create: create,
}