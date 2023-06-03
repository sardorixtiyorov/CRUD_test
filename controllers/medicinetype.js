const db = require("../config/db");

exports.getAllMedicineTypes = (req, res) => {
  db.query("SELECT * FROM medicinetype", (error, results) => {
    if (error) {
      console.log("Error retrieving medicineType");
      return res.status(500).json({
        error: "Internal Server Error",
      });
    }
    res.json(results);
  });
};
exports.getMedicineTypeById = (req, res) => {
  db.query(
    "SELECT * FROM medicinetype WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error retrieving medicineType");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.length === 0) {
        return res.status(404).json({
          error: "medicineType not found",
        });
      }
      res.json(results[0]);
    }
  );
};
exports.createMedicineType = (req, res) => {
  const { name } = req.body;
  db.query(
    "INSERT INTO medicinetype (name) VALUES(?)",
    name,
    (error, results) => {
      if (error) {
        console.log("Error creating medicineType");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      res.json({
        message: "MedicineType created successfully",
        medecineTypeId: results.insertId,
      });
    }
  );
};
exports.updateMedicineType = (req, res) => {
  const { name } = req.body;
  db.query(
    "UPDATE medicinetype SET name =? WHERE id =?",
    [name, req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error updating medicineType");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "medicineType not found",
        });
      }
      res.json({
        message: "medicineType updated successfully",
      });
    }
  );
};
exports.deleteMedicineType = (req, res) => {
  db.query(
    "DELETE FROM medicinetype WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error deleting medicineType");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "medicineType not found",
        });
      }
      res.json({
        message: "medicineType deleted successfully",
      });
    }
  );
};
