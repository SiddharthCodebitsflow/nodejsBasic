const express = require("express");
const router = express.Router();
const { PutRequest, deleteRequest, getRequest, insertData } = require('../Controller/User');

router.route("/").get(getRequest);

router.route("/:id").put(PutRequest);

router.route("/:id").delete(deleteRequest);

router.route("/insert").post(insertData);

module.exports = router; 