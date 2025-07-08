const express = require("express");
const cors = require("cors");
const app = express();
const config = require("config");
const port = 3000;
const appCustom = require("./config/appCustom");

app.use(cors());
app.use(express.static('frontEnd'));
appCustom(app, express);



app.listen(port, (error) => {
    if (error) {
        console.log("Deu erro");
        return;
    }
    console.log("Subiu showw");

});