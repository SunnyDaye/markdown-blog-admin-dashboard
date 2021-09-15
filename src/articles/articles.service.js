const knex = require("../db/connection");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const list = async () => {
  const articles = await knex("articles").select("*").orderBy("createdAt",'desc');
  return articles;
};
const create = async (article) => {
  const newArticles = await knex("articles").insert(article).returning("*");

  return newArticles[0];
};

const read = async (slug) => {
  const article = await knex("articles").select("*").where({ slug });
  return article[0];
};

const destroy = async (slug) => {
  const articlesDeleted = await knex('articles').where({ slug }).del();
  return articlesDeleted;
}
module.exports = {
  list,
  create,
  read,
  delete: destroy,
};
