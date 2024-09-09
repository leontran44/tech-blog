const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");
const fs = require("fs");
const path = require("path");

// Seed the database
const seedAll = async () => {
  await sequelize.sync({ force: true }); // Drops existing tables and recreates them

  console.log("--- DATABASE SYNCED ---");

  // Read JSON data
  const userData = require("./userData.json");
  const postData = require("./postData.json");
  const commentData = require("./commentData.json");

  // Seed Users
  await User.bulkCreate(User, {
    individualHooks: true, // Ensures password hashing happens
    returning: true,
  });
  console.log("--- USERS SEEDED ---");

  // Seed Posts
  await Post.bulkCreate(Post);
  console.log("--- POSTS SEEDED ---");

  // Seed Comments
  await Comment.bulkCreate(Comment);
  console.log("--- COMMENTS SEEDED ---");

  process.exit(0); // Exit the process once seeding is complete
};

seedAll();
