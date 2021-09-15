
exports.up = function(knex) {
  return knex.schema.createTable('articles', (table) => {
    table.increments('articleId').unique().primary();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.text('markdown').notNullable();
    table.string('slug').notNullable().unique(); 
    table.date('createdAt').defaultTo(new Date().toLocaleDateString('en-US'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('articles');
};
