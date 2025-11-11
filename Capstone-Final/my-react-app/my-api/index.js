const mongoose = require("mongoose");
 
mongoose.connect("mongodb+srv://<db_username>:<db_password>@cluster0.y0lup44.mongodb.net/?appName=Cluster0")
   .then(() => console.log("MongoDB connected"))
   .catch((err) => console.error("Connection error:", err));

const express = require("express");
 const app = express();

 function logger(req, res, next) {
   console.log(`${req.method} ${req.url}`);
   next(); // continue to the route handler
 }
 app.use(logger);
 
 app.get("/", (req, res) => {
   res.send("Welcome to my API!");
 });

 app.get("/about", (req, res) => {
   res.send("This is the about page.");
 });
 
 app.get("/users", (req, res) => {
   res.json([{ name: "Ali" }, { name: "Siti" }]);
 });

 app.get("/home", (req, res) => {
   res.send("Welcome home!");
 });
 
 app.post("/submit", (req, res) => {
   res.send("Form submitted");
 });

 app.get("/user/:id", (req, res) => {
   const userId = req.params.id;
   res.send(`User ID: ${userId}`);
 });

 app.post("/message", (req, res) => {
  const message = req.body.text;
  res.send(`You said: ${message}`);
});

  app.listen(3000, () => {
   console.log("Server is running on http://localhost:3000");
 });