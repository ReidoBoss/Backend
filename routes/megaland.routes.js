module.exports = app => {
    // Define and configure routes using the provided `app` instance

    const properties = require("../controllers/megaland.controllers.js");
    var router = require("express").Router();

    router.post("/",properties.addProperty);

    app.use('/api/properties',router);
};

// const properties = require("../controllers/megaland.controllers.js");
// const express = require("express");
// const router = express.Router();

// router.post("/", properties.addProperty);

// module.exports = function(app) {
//     // Use the router in your Express app
//     app.use('/', router);
// };