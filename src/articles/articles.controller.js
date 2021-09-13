const list = (req,res) => {
    const articles = [
        {
          title: "Test Article 0",
          createdAt: new Date,
          description: "Test description",
        },
        {
            title: "Test Article 1",
            createdAt: new Date,
            description: "Test description 1",
          }
      ];
      res.render("articles/index.ejs", { articles });
}

const create = (req,res) => {
    res.render('articles/new');
}


module.exports = {
    list: list,
    create: create,
}