const express = require("express");
const bodyParser = require("body-parser");
require("express-group-routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Header", "*");
  // res.header("Access-Control-Allow-Method");
  next();
});

//controllers categories
const categoriesContr = require("./controllers/categories");
//controllers Home article
const ArticleContr = require("./controllers/article");
// group page home
app.group("/api/categories/", router => {
  //categories
  router.get("/", categoriesContr.index);
});

app.group("/api/articles", router => {
  // article index
  router.get("/", ArticleContr.index);
  router.get("/limit", ArticleContr.indexLimit);
  router.get("/article/:id", ArticleContr.show);
  router.get("/category/:id", ArticleContr.Categories);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
