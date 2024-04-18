const router = require("express").Router();
module.exports = router;

//Route: /api
router.use("/bookings", require("./bookings/route"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
