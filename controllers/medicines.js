const db = require("../config/db");

exports.getAllMedicines = (req, res) => {
  db.query("SELECT * FROM medicines", (error, results) => {
    if (error) {
      console.log("Error retrieving medicines");
      return res.status(500).json({
        error: "Internal Server Error",
      });
    }
    res.json(results);
  });
};

exports.getMedicineById = (req, res) => {
  db.query(
    "SELECT * FROM medicines WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error retrieving medicine");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.length === 0) {
        return res.status(404).json({
          error: "medicine not found",
        });
      }
      res.json(results[0]);
    }
  );
};

exports.createMedicine = (req, res) => {
  const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
    req.body;
  db.query(
    "INSERT INTO medicines (name,manufacturer,medicine_type_id,price,expiry_date,info) VALUES(?,?,?,?,?,?)",
    [name, manufacturer, medicine_type_id, price, expiry_date, info],
    (error, results) => {
      if (error) {
        console.log("Error creating medicine");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      res.json({
        message: "medicine created successfully",
        medicineId: results.insertId,
      });
    }
  );
};

exports.updatemedicines = (req, res) => {
  const { id } = req.params;
  const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
    req.body;
  db.query(
    "UPDATE medicines SET name=?,manufacturer=?,medicine_type_id=?,price=?,expiry_date=?,info=? WHERE id =?",
    [name, manufacturer, medicine_type_id, price, expiry_date, info, id],
    (error, results) => {
      if (error) {
        console.log("Error updating medicine");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "medicine not found",
        });
      }
      res.json({
        message: "medicine updated successfully",
      });
    }
  );
};

exports.deletemedicines = (req, res) => {
  db.query(
    "DELETE FROM medicines WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error deleting medicines");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "medicine not found",
        });
      }
      res.json({
        message: "medicine deleted successfully",
      });
    }
  );
};
