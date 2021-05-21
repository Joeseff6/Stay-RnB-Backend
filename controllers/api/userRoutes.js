const router = require("express").Router();
const db = require(`../../models`);
const bcrypt = require(`bcrypt`);

// Create new user
router.post(`/`, async (req, res) => {
  try {
    req.body.data.password = await bcrypt.hash(req.body.data.password, 10);
    const newUser = await db.User.create(req.body.data);
    req.session.userId = newUser._id;
    req.session.loggedIn = true;
    res.status(200).json({ user: newUser, message: "New user created" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logging in
router.post("/login", async (req, res) => {
  try {
    try {
      const userData = await db.User.findOne({
        username: req.body.data.username,
      });
      if (!userData) {
        res
          .status(400)
          .json({
            message: "Incorrect username or password, please try again",
          });
        return;
      }
      bcrypt.compare(
        req.body.data.password,
        userData.password,
        (err, isMatching) => {
          if (err) {
            console.log(err);
          } else if (isMatching) {
            req.session.userId = userData._id;
            req.session.save(() => {
              req.session.loggedIn = true;
              res.json({ user: userData, message: "You are now logged in!" });
            });
            console.log(`successful login!`);
          } else {
            res
              .status(400)
              .json({
                message: "Incorrect email or password, please try again",
              });
            return;
          }
        }
      );
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logging out
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
