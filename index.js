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
// controller comments
const commentsContr = require("./controllers/comments");
// controller users
const usersContr = require("./controllers/user");
// group page home
app.get("/", (req, res) => {
  res.send("hello world");
});
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
  router.get("/releated/:id", ArticleContr.releated);
  router.get("/byperson/:id", ArticleContr.articleByPerson);
  router.post("/create", ArticleContr.input);
  router.put("/edit/:id", ArticleContr.edit);
  router.delete("/delete/:id", ArticleContr.delete);
});

// end point comments
app.group("/api/comments", router => {
  router.get("/:id", commentsContr.comments);
  router.post("/input/:id", commentsContr.created);
});

app.group("/api/users", router => {
  router.post("/register", usersContr.register);
});

app.listen(port);
