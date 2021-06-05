const express = require("express");
const {
    createBook,
    getAllBooks,
    updateBook,
    deleteBook,
    getBook,
    getPublishedBooks,
} = require("../controllers/bookControllers");

const router = express.Router();

router.route("/books").get(getAllBooks).post(createBook);
router.route("/books/published").get(getPublishedBooks);
router.route("/books/:id").patch(updateBook).delete(deleteBook).get(getBook);

module.exports = router;
