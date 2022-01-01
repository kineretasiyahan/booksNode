const { bookModel, bookValidate } = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find({});
    if (!books) throw error;
    res.status(200).json({
      success: true,
      message: "success",
      data: result,
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method get books",
      success: false,
      error: err.message
    })
  }
};
const getBookById = async (req, res) => {
  try {
    bookModel.findById(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({
        success: true,
        message: "success",
        data: result,
      });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method get books by id",
      success: false,
      error: err.message
    })
  }
};

const updateBookById = async (req, res) => {
  try {
    bookModel.findOneAndUpdate(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({
        success: true,
        message: "success",
        data: result,
      });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method update books",
      success: false,
      error: err.message
    })
  }
};

const deleteBookById = async (req, res) => {
  try {
    bookModel.findByIdAndDelete(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({
        success: true,
        message: "success",
        data: result,
      });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method delete books",
      success: false,
      error: err.message
    })
  }
};
const createBook = async (req, res) => {
  try {
    await bookModel.insertMany(req.body.books, (error, result) => {
      if (error) throw error;
      res.status(200).json({
        success: true,
        message: "success",
        data: result,
      });
    });
  } catch (err) {
    res.status(301).json({
      message: "error in method post books",
      success: false,
      error: err.message
    })
  }
};
module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
};
