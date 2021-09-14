const knex = require('../db/connection');

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

module.exports = {
    list,
    create,
}