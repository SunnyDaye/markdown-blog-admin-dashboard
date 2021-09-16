const knex  = require("./db/connection");
const app = require("./app");
const { PORT } = process.env;

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  })
  .catch(console.error);
