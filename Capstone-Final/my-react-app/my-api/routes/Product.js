const Product = require("../models/Product.js");
 
 // CREATE
 router.post("/", async (req, res) => {
   const product = new Product(req.body);
   const saved = await product.save();
   res.status(201).json(saved);
 });
 
 // READ
 router.get("/", async (req, res) => {
   const products = await Product.find();
   res.json(products);
 });
 
 // UPDATE
 router.put("/:id", async (req, res) => {
   const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
   res.json(updated);
 });
 
 // DELETE
 router.delete("/:id", async (req, res) => {
   await Product.findByIdAndDelete(req.params.id);
   res.sendStatus(204);
 });