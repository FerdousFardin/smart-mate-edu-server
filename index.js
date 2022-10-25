const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/category.json");
const courses = require("./data/courses.json");
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  console.log(courses.length);
  const selectedCategory = courses.filter(
    (course) => id === course.category_id
  );
  res.send(selectedCategory);
});
app.listen(port, () => {
  console.log("Server is now listening this port:", port);
});
