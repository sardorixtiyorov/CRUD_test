const db = require("../config/db");

exports.getAllPharmacies = (req, res) => {
  db.query("SELECT * FROM pharmacies", (error, results) => {
    if (error) {
      console.log("Error retrieving pharmacies");
      return res.status(500).json({
        error: "Internal Server Error",
      });
    }
    res.json(results);
  });
};

exports.getPharmacyById = (req, res) => {
  db.query(
    "SELECT * FROM pharmacies WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error retrieving pharmacy");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.length === 0) {
        return res.status(404).json({
          error: "Pharmacy not found",
        });
      }
      res.json(results[0]);
    }
  );
};

exports.createpharmacies = (req, res) => {
  const { name,address,location,phone,email,region_id,district_id } = req.body;
  db.query(
    "INSERT INTO pharmacies (name,address,location,phone,email,region_id,district_id) VALUES(?,?,?,?,?,?,?)",
    [name, address, location, phone, email, region_id, district_id],
    (error, results) => {
      if (error) {
        console.log("Error creating pharmacy");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      res.json({
        message: "pharmacy created successfully",
        pharmacyId: results.insertId,
      });
    }
  );
};

exports.updatepharmacies = (req, res) => {
    const { id } = req.params;
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;
  db.query(
    "UPDATE pharmacies SET name=?,address=?,location=?,phone=?,email=?,region_id=?,district_id=? WHERE id =?",
    [name,address,location,phone,email,region_id,district_id, id],
    (error, results) => {
      if (error) {
        console.log("Error updating pharmacy");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "pharmacy not found",
        });
      }
      res.json({
        message: "pharmacy updated successfully",
      });
    }
  );
};

exports.deletepharmacies = (req, res) => {
  db.query(
    "DELETE FROM pharmacies WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error deleting pharmacy");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "pharmacy not found",
        });
      }
      res.json({
        message: "pharmacy deleted successfully",
      });
    }
  );
};
