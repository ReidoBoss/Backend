module.exports = app => {
    const properties = require("../controllers/megaland.controllers.js");
    const agents =require("../controllers/megaland.controllers.js");
    var router = require("express").Router();

    router.post("/properties",properties.addProperty);
    router.post("/agents",agents.addAgent);
    router.get("/",properties.getLatestProperty);
    router.get("/search",properties.getAllProperty);
    router.get("/getAgents",properties.getAgents);
    router.get("/getPropertyDetails/:id",properties.getPropertyDetails);
    app.use('/api',router);


};