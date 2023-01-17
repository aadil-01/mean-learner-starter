const express = require("express");
const controller = require("../controller/controller");
const router = express.Router();

//to declare routes for api
router.get("/view/all", controller.fetchAllData);
router.get("/view/:id", controller.fetchData);
router.post("/insert", controller.insertData);
router.patch('/update/:id', controller.updateData);
router.delete('/delete/:id', controller.deleteData);

module.exports = router;