const express = require("express");
const app = express();
const path = require("path");
const mainRouter = require("./routes/main");

const PORT = process.env.PORT || 8000;

const publicPath = path.resolve(__dirname, "./public");

app.set('view engine', 'ejs'); 


app.use(express.static(publicPath));

app.use(mainRouter);

app.listen(PORT, () => console.log("Server listening on port: " + PORT));
