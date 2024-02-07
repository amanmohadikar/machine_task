
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    authorName: { type: String, required: true }
});

const BookModel = mongoose.model('machinetestBooks', bookSchema);

export default BookModel;
