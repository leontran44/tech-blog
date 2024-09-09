const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const fs = require('fs');
const path = require('path');

// Seed the database
const seedAll = async () => {
await sequelize.sync({ force: true }); // Drops existing tables and recreates them

console.log('--- DATABASE SYNCED ---');

// Read JSON data
const users = readJSON('userData.json');
const posts = readJSON('postData.json');
const comments = readJSON('commentData.json');

// Seed Users
await User.bulkCreate(users, {
    individualHooks: true, // Ensures password hashing happens
    returning: true,
});
console.log('--- USERS SEEDED ---');

// Seed Posts
await Post.bulkCreate(posts);
console.log('--- POSTS SEEDED ---');

// Seed Comments
await Comment.bulkCreate(comments);
console.log('--- COMMENTS SEEDED ---');

process.exit(0); // Exit the process once seeding is complete
};

seedAll();