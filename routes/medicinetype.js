const express = require("express");
const medecinetypeController = require("../controllers/medicinetype");
const router = express.Router();

router.get("/", medecinetypeController.getAllMedicineTypes);
router.get("/:id", medecinetypeController.getMedicineTypeById);
router.post("/", medecinetypeController.createMedicineType);
router.put("/:id", medecinetypeController.updateMedicineType);
router.delete("/:id", medecinetypeController.deleteMedicineType);

module.exports = router;
