const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://10.10.10.182:27017/appx-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('No se pudo conectar a MongoDB', err));

// Definir un esquema y un modelo de ejemplo
const BookSchema = new mongoose.Schema({|
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

const url = 'http://localhost:8081/punto'; // Reemplaza el puerto y el endpoint
const data = {
  key1: 'value1',
  key2: 'value2'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch((error) => {
  console.error('Error:', error);
});