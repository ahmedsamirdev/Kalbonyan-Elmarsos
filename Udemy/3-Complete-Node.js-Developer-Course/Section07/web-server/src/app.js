const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Ahmed Samir",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Ahmed Samir",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text",
    title: "Help",
    name: "Ahmed Samir",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Cairo",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Ahmed Samir",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Ahmed Samir",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
