import bcrypt from "bcryptjs";

const users = [
  {
    name: "Randeep Rana",
    isAdmin: true,
    email: "admin@example.com",
    password: bcrypt.hash("1234", 10),
  },
  {
    name: "Suraj Rana",
    isAdmin: true,
    email: "admin@example.com",
    password: bcrypt.hash("1234", 10),
  },
  {
    name: "Chintu Rana",
    isAdmin: true,
    email: "admin@example.com",
    password: bcrypt.hash("1234", 10),
  },
];

export default users;
