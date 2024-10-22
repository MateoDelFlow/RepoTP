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

const express = require('express');
const app = express();
const port = 3000;  // Cambia el puerto si lo necesitas

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Texto en el Navegador</title></head>
      <body>
        <h1>¡Hola desde localhost!</h1>
        <p>Este texto es servido desde un servidor Node.js en localhost.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});