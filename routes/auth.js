const express = require("express");
const router = express.Router();
const parser = require("body-parser");
require("body-parser").json();
const Book = require("./../models/User");
const mongoose = require("mongoose");
const e = require("express");

router.post("/postbook", async (req, res) => {
  const data = req.body;
  try {
    const bookdata = new Book(data);
    const response = await bookdata.save();
    res.status(200).json({ message: "Book Saved" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getbook/:id", async (req, res) => {
  const bookid = req.params.id;
  console.log(bookid);
  if (!mongoose.Types.ObjectId.isValid(bookid)) {
    return res.status(400).json({ error: "Invalid Book id" });
  }
  try {
    const booksearch = await Book.findById(bookid);
    if (!booksearch) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(booksearch);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getbook", async (req, res) => {
  const book = req.body;
  try {
    const find_book = await Book.find(book);
    res.status(200).json(find_book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

//updating a book

router.put("/update/:id", async (req, res) => {
  const book = req.params.id;
  const updatedbook = req.body;
  try {
    const response = await Book.findByIdAndUpdate(book, updatedbook, {
      new: true,
      runValidators: true,
    });
    if (!response) return res.status(403).json({ error: "Book not found" });
    res.status(200).json(response);
    console.log("data has been updated");
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: "Internal server error " });
  }
});

//deleting a book
router.delete("/delete/:id", async (req, res) => {
  const book = req.params.id;
  try {
    const response = await Book.findByIdAndDelete(book);
    if (!response) return res.status(403).json({ error: "Book Not Found" });
  } catch (error) {
    res.status(200).json({ error: "Internal server error" });
  }
});
router.get("/", async (req, res) => {
  res.send("this is a message");
});
module.exports = router;
