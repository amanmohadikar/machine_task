
import bookSchema from "../model/bookSchema.js";

const createBook = async function (req, res) {
    const data = req.body;
    const book = await bookSchema.create(data);
    return res.status(201).send({ message: book });
}

const getBooks = async function (req, res) {
    const books = await bookSchema.find();
    return res.status(200).send({ message: books });
}

export { createBook, getBooks };
