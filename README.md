<div align="center">
  
  # Tech Blog
  > Module 14 Challenge

![JavaScript Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393%3F?style=for-the-badge&logo=node.js&logoColor=green)](https://nodejs.org/en/)
[![Express Badge](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-6.x-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/)
[![PostgreSQL Badge](https://img.shields.io/badge/PostgreSQL-13-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![dotenv Badge](https://img.shields.io/badge/dotenv-8.2.0-ECD53F?style=for-the-badge&logo=dotenv&logoColor=white)](https://www.npmjs.com/package/dotenv)

</div>

## Description

This repository contains the code for the **Tech Blog Back End** application. This project follows the Model-View-Controller (MVC) architecture and allows users to create accounts, write blog posts, and comment on other developers' posts. It provides a RESTful API for managing user accounts, blog posts, and comments. The application is built using Node.js, Express, Sequelize, and PostgreSQL.

### Key Features:

- **User Authentication**: Secure user signup and login with hashed passwords.
- **Blog Post Management**: Users can create, edit, and delete their blog posts.
- **Commenting System**: Users can comment on blog posts and view comments from other users.
- **Seamless Associations**: Each blog post is associated with a user, and comments are associated with both users and posts.

## Website

You can view website [here](https://tech-blog-o6cs.onrender.com)

## Installation

To run this application, follow these steps:

1. **Ensure Node.js is Installed:**

   You will need Node.js installed on your computer. Check if you have Node.js by typing `node -v` in your command line. You should see a version number. If Node.js is not installed, visit the [Node.js website](https://nodejs.org/en) to install it.

2. **Clone the Repository:**

   Clone this project repository to your computer:

   ```bash
   git clone https://github.com/leontran44/tech-blog.git
    cd tech-blog
   ```

3. **Install Dependencies:**

   Use the following command to install the required dependencies:

   ```bash
   npm install
   ```

4. **Set Up the Database:**

   Create a PostgreSQL database named `blog_db`. Run the provided SQL schema located in the `db/schema.sql` file to create the necessary tables. Optionally, seed the database using the `npm run seed` command to populate the database with initial data.

5. **Set Up Environment Variables:**

   Create a `.env` file in the root directory of the project. Add the following environment variables to the file:

   ```plaintext
   DB_HOST=localhost
   DB_NAME=blog_db
   DB_USER=postgres
   DB_PASSWORD=your_password
   ```

   Replace `your_password` with your PostgreSQL password.

6. **Start the Server:**

   Start the Express server using the following command:

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3001`.

## Usage

- Node.js: JavaScript runtime environment.
- Express.js: Web framework for Node.js.
- Sequelize: Promise-based Node.js ORM for PostgreSQL.
- PostgreSQL: Relational database management system.
- dotenv: Environment variable management.
- Insomnia Core: API testing tool.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Contact

- GitHub: [leontran44](https://github.com/leontran44)
- Email: [Leon Tran](mailto:leontran44@gmail.com)
- LinkedIn: [Leon Tran](https://www.linkedin.com/in/hoangqtran/)
