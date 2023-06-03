const db = require("../config/db");

exports.getAllStocks = (req, res) => {
  db.query("SELECT * FROM stock", (error, results) => {
    if (error) {
      console.log("Error retrieving stock");
      return res.status(500).json({
        error: "Internal Server Error",
      });
    }
    res.json(results);
  });
};
exports.getStockById = (req, res) => {
  db.query(
    "SELECT * FROM stock WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error retrieving stock");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.length === 0) {
        return res.status(404).json({
          error: "Stock not found",
        });
      }
      res.json(results[0]);
    }
  );
};
exports.createStock = (req, res) => {
  const { medicine_id,pharmacy_id,quantity } = req.body;
  db.query(
    "INSERT INTO stock ( medicine_id,pharmacy_id,quantity) VALUES(?,?,?)",
    [medicine_id, pharmacy_id, quantity],
    (error, results) => {
      if (error) {
        console.log("Error creating stock");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      res.json({
        message: "Stock created successfully",
        stockId: results.insertId,
      });
    }
  );
};
exports.updateStock = (req, res) => {
  const { medicine_id, pharmacy_id, quantity } = req.body;
  db.query(
    "UPDATE stock SET medicine_id=?,pharmacy_id=?,quantity=? WHERE id =?",
    [medicine_id,pharmacy_id,quantity, req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error updating stock");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "Stock not found",
        });
      }
      res.json({
        message: "Stock updated successfully",
      });
    }
  );
};
exports.deleteStock = (req, res) => {
  db.query(
    "DELETE FROM stock WHERE id =?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.log("Error deleting stock");
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: "Stock not found",
        });
      }
      res.json({
        message: "Stock deleted successfully",
      });
    }
  );
};
