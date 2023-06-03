const db = require("../config/db");

exports.getAllRegions = (req, res) => {
  db.query("SELECT * FROM region", (error, results) => {
    if (error) {
      console.log("Error retrieving regions");
      return res.status(500).json({
        error: "Internal Server Error",
      });
    }
    res.json(results);
  });
};

exports.getRegionById = (req, res) => {
  db.query(
    "SELECT * FROM region WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error retrieving region");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.length === 0) {
        return res.status(404).json({
          error: "Region not found",
        });
      }
      res.json(results[0]);
    }
  );
};

exports.createRegion = (req, res) => {
  const { id, name } = req.body;
  db.query(
    "INSERT INTO region (id,name) VALUES(?,?)",
    [id, name],
    (error, results) => {
      if (error) {
        console.log("Error creating region");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      res.json({
        message: "Region created successfully",
        regionId: id,
      });
    }
  );
};

exports.updateRegion = (req, res) => {
  const { id, name } = req.body;
  db.query(
    "UPDATE region SET name =? WHERE id =?",
    [name, id],
    (error, results) => {
      if (error) {
        console.log("Error updating region");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "Region not found",
        });
      }
      res.json({
        message: "Region updated successfully",
      });
    }
  );
};

exports.deleteRegion = (req, res) => {
  db.query(
    "DELETE FROM region WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error deleting region");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "Region not found",
        });
      }
      res.json({
        message: "Region deleted successfully",
      });
    }
  );
};
