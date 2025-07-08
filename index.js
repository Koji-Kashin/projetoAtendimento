const express = require("express");
const app = express();
const config = require("config");
const port = 3000;
const appCustom = require("./config/apCustom");

appCustom(app, express);



app.listen(port, (error) => {
    if (error) {
        console.log("Deu erro");
        return;
    }
    console.log("Subiu showw");

});