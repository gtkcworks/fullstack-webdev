const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productroutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// connect MongoDB
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.y0lup44.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error:", err));

// routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
