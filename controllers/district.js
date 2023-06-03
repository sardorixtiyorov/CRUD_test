const db = require("../config/db");

exports.getAllDistricts = (req, res) => {
  db.query("SELECT * FROM district", (error, results) => {
    if (error) {
      console.log("Error retrieving districts");
      return res.status(500).json({
        error: "Internal Server Error",
      });
    }
    res.json(results);
  });
};

exports.getDistrictById = (req, res) => {
  db.query(
    "SELECT * FROM district WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error retrieving district");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.length === 0) {
        return res.status(404).json({
          error: "district not found",
        });
      }
      res.json(results[0]);
    }
  );
};

exports.createDistrict = (req, res) => {
  const { name, region_id } = req.body;
  db.query(
    "INSERT INTO district (name,region_id) VALUES(?,?)",
    [name, region_id],
    (error, results) => {
      if (error) {
        console.log("Error creating district");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      res.json({
        message: "district created successfully",
        districtId: results.insertId,
      });
    }
  );
};

exports.updatedistrict = (req, res) => {
  const { id } = req.params;
  const { name, region_id } = req.body;
  db.query(
    "UPDATE district SET name =?,region_id=? WHERE id =?",
    [name, region_id, id],
    (error, results) => {
      if (error) {
        console.log("Error updating district");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "district not found",
        });
      }
      res.json({
        message: "district updated successfully",
      });
    }
  );
};

exports.deletedistrict = (req, res) => {
  db.query(
    "DELETE FROM district WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error deleting district");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "district not found",
        });
      }
      res.json({
        message: "district deleted successfully",
      });
    }
  );
};
