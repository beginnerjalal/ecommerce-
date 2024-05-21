const bcrypt = require("bcryptjs");
const Users = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "jalal",
    email: "beginner.jalal@gmail.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "user",
    email: "user@user.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "user1",
    email: "user1@user.com",
    password: bcrypt.hashSync("12345", 10),
  }
];
module.exports = Users ;