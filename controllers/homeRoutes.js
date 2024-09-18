const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth"); // Import the withAuth middleware

// Homepage route - Get all posts with user and comments (publicly accessible)
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: [User], // Include the user who made the comment
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("home", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get a single post by its ID
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'], // Include the username of the post creator
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['username'], // Include the username of the user who made the comment
            },
          ],
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    // Convert the Sequelize model instance to a plain JavaScript object
    const post = postData.get({ plain: true });

    // Render the 'post' template and pass the post data
    res.render('post', {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Dashboard route - Get all posts by the logged-in user
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render login page (publicly accessible)
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// Render signup page (publicly accessible)
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

module.exports = router;
