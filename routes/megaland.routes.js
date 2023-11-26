module.exports = app => {
    const properties = require("../controllers/megaland.controllers.js");
    var router = require("express").Router();

    router.post("/",properties.addProperty);
    router.get("/",properties.getLatestProperty);

    app.use('/api/properties',router);
};