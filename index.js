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
  const selectedCategory = courses.filter(
    (course) => id === course.category_id
  );
  res.send(selectedCategory);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/course/:id", (req, res) => {
  const courseId = req.params.id;
  const selectedCourse = courses.find((c) => c._id === courseId);
  res.send(selectedCourse);
});
app.listen(port, () => {});
