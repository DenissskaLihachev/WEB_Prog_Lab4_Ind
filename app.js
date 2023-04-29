const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("view engine", "hbs");
app.set("view options", { layout: "layouts/layout"});
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(__dirname + '/views'))

app.use("/anime", function (request, response) {
    response.render("anime.hbs");
});
app.use("/comedy", function (request, response) {
    response.render("comedy.hbs");
});
app.use("/detective", function (request, response) {
    response.render("detective.hbs");
});
app.use("/horror", function (request, response) {
    response.render("horror.hbs");
});
app.use("/", function (request, response) {
    response.render("main.hbs");
});
app.use("/*", function (request, response) {
    response.redirect("/");
}); 
app.listen(3000);
