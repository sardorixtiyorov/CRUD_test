const express = require("express");

const router = express.Router();

const regionRotes = require("./region");
const districtRoutes = require("./district");
const medicineType = require("./medicinetype");
const stockRoutes = require("./stock");
const medicineRoutes = require("./medicines");
const pharmacyRoutes = require("./pharmacies");

router.use("/regions", regionRotes);
router.use("/districts", districtRoutes);
router.use("/medicinetypes", medicineType);
router.use("/stocks", stockRoutes);
router.use("/medicines", medicineRoutes);
router.use("/pharmacies", pharmacyRoutes);

module.exports = router;
