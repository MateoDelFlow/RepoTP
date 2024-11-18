const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://192.168.91.131:27017/libros', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BookSchema = new mongoose.Schema({
  title: String,
  author: String
});

const Book = mongoose.model('Book', BookSchema);

// Ruta para obtener todos los libros
app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Ruta para agregar un libro
app.post('/books', async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.json(newBook);
});

// Iniciar servidor
app.listen(8080, () => {
  console.log('API escuchando en el puerto 8080');
});


//Probando el pipeline