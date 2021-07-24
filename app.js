const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8000;

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.set('view engine', 'ejs'); 

const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /products
const usersRouter = require('./routes/users'); // Rutas /users

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => console.log("Server listening on port: " + PORT));
