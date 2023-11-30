var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.home);
router.get("/detalle/:id", indexController.detail);


module.exports = router;
