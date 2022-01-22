const router = require("express").Router(),
  db = require("../models/dbConnection");

router.get("/", (req, res) => {
  res.json("Welcome to Bisimwa API's...");
});

router.post("/", (req, res) => {
  let email = req.body;

  if (!email) {
    res.json("Empty email");
    res.status(500);
  } else {
    let sql = `INSERT INTO abonners(email) VALUE('${email}')`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      req.json(result);
    });
  }
});
router.get("/All", (req, res) => {
  let sql = "SELECT * FROM abonners ORDER BY id DESC";
  db.query(sql, (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.json(results);
  });
});

module.exports = router;
