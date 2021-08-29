const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require('express-session');
const cookies = require('cookie-parser');

const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(methodOverride("_method"));

const PORT = process.env.PORT || 8000;

const publicPath = path.resolve(__dirname, "./public");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));
app.use(express.json());

app.use(session({
    secret: 'Secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(cookies());

app.use(userLoggedMiddleware);

app.set("view engine", "ejs");

const mainRouter = require("./routes/main"); // Rutas main
const productsRouter = require("./routes/products"); // Rutas /products
const usersRouter = require("./routes/users"); // Rutas /users

app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => console.log("Server listening on port: " + PORT));
