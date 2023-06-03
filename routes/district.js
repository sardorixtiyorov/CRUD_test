const express = require("express");
const districtController = require("../controllers/district");
const router = express.Router();

router.get("/", districtController.getAllDistricts);

router.get("/:id", districtController.getDistrictById);

router.post("/", districtController.createDistrict);

router.put("/:id", districtController.updatedistrict);

router.delete("/:id", districtController.deletedistrict);

module.exports = router;
