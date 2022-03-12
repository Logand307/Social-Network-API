const router = require("express").Router();

const { getAllUser, createUser } = require("../../controllers/user-controller");

router.route("/").get(getAllUser).post(createUser);
// router.get("/", (req, res) => {
//   res.send("hello world");
// });

module.exports = router;
