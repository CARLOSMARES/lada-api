const express = require("express");

const app = express();

const cors = require("cors");

const ladas = require("./ladas-internacionales.json");

app.use("cors");

var port = process.env.port || 8080;

app.get("/api/test", (req, res) =>{

    res.send("Test Correcto");

});

app.get("/api/ladas", (req, res) =>{

    res.json(ladas);

});

// app.get("/api/ladas/:name", (req, res) =>{
//     res.json(ladas[].name);
// });

app.listen(port);