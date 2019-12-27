const express = require("express");
const bodyParser = require("body-parser");
require("express-group-routes");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
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
// auth
const authContr = require("./controllers/auth");
const { authenticated } = require("./middleware");
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
  router.get("/", ArticleContr.index); //get all article
  router.get("/limit", ArticleContr.indexLimit); // get 5 latest article
  router.get("/article/:id", ArticleContr.show); // get article by id
  router.get("/category/:id", ArticleContr.Categories); // get article by category
  router.get("/releated/:id", ArticleContr.releated); // get 3 article by category
  router.get("/byperson/:id", authenticated, ArticleContr.articleByPerson); //get article by id
  router.post("/create", authenticated, ArticleContr.input); //post article
  router.put("/edit/:id", authenticated, ArticleContr.edit); //edit article
  router.delete("/delete/:id", authenticated, ArticleContr.delete); //delete article
});

// end point comments
app.group("/api/comments", router => {
  router.get("/:id", commentsContr.comments);
  router.post("/input/:id", commentsContr.created);
});

app.group("/api/users", router => {
  router.post("/register", usersContr.register);
  router.post("/login", authContr.login);
});

app.listen(port);
