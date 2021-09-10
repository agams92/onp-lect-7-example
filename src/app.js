const express = require("express");
const path = require("path");
const fileUpload = require("./multer");
const app = express();

// вот таким образом можно засетить кастомную папку для вьюшек
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use(express.static("uploads"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main/index", { title: "Главная" });
});

app.get("/api/", (req, res) => {
  res.render("api/index", {
    title: "Ето апи",
    apiVersions: [1, 2, 3, 4],
  });
});

app.post("/api", fileUpload.single("someFile"), (req, res) => res.json("ok"));

app.listen(3000, () => console.log("Lecture 7 example is ready"));
