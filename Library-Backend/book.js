const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/librarydb')
const schema = mongoose.Schema

const BookSchema = new schema({
 author : String,
 bookname : String,
 imgUrl : String,
 synopsis : String
},{
 versionKey: false
})
const bookData = mongoose.model('books',BookSchema)
module.exports = bookData




