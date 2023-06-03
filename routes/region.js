const express = require("express");
const regionController = require("../controllers/region");
const router = express.Router();

router.get("/", regionController.getAllRegions);
router.get("/:id", regionController.getRegionById);
router.post("/", regionController.createRegion);
router.put("/:id", regionController.updateRegion);
router.delete("/:id", regionController.deleteRegion);

module.exports = router;
