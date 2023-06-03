const express = require("express");
const pharmacyController = require("../controllers/pharmacies");
const router = express.Router();

router.get("/", pharmacyController.getAllPharmacies);
router.get("/:id", pharmacyController.getPharmacyById);
router.post("/", pharmacyController.createpharmacies);
router.put("/:id", pharmacyController.updatepharmacies);
router.delete("/:id", pharmacyController.deletepharmacies);

module.exports = router;
