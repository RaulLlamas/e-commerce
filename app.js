const express = require('express');
const app = express();
const path =require('path');

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

app.listen(8000, () =>{
    console.log("Servidor funcionando");
});

app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/shopping-cart',(req,res) =>{
    res.sendFile(__dirname + '/views/productCart.html');
});
app.get('/register',(req,res) =>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login',(req,res) =>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/prueba',(req,res) =>{
    res.sendFile(__dirname + '/views/prueba.html');
});