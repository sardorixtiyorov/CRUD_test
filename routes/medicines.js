const express = require("express");
const medicineController = require("../controllers/medicines");
const router = express.Router();

router.get("/", medicineController.getAllMedicines);
router.get("/:id", medicineController.getMedicineById);
router.post("/", medicineController.createMedicine);
router.put("/:id", medicineController.updatemedicines);
router.delete("/:id", medicineController.deletemedicines);

module.exports = router;
