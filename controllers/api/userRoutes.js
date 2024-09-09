const router = require("express").Router();
const { User } = require("../../models");

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    // Automatically log the user in after they sign up
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ message: "Signup successful!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Save session and log the user in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
