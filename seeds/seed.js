const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");
// Seed the database

const seedAll = async () => {
  await sequelize.sync({ force: true }); // Drops existing tables and recreates them

  console.log("--- DATABASE SYNCED ---");

  // Seed Users
  const users = await User.bulkCreate(userData, {
    individualHooks: true, // Ensures password hashing happens
    returning: true,
  });
  console.log("--- USERS SEEDED ---");

   // Seed Posts with random user_id assignment
   for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id, // Assign random user_id
    });
  }

  // Seed Comments
  await Comment.bulkCreate(commentData);
  console.log("--- COMMENTS SEEDED ---");

  process.exit(0); // Exit the process once seeding is complete
};

seedAll();
