const express = require('express');
const app = express();

app.use('/static', express.static(__dirname +'/public'));

app.listen(8000, () =>{
    console.log("Servidor funcionando");
});

app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/register',(req,res) =>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login',(req,res) =>{
    res.sendFile(__dirname + '/views/login.html');
});