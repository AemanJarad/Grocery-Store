// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://225060056:72022180978@cluster0.mnspxsd.mongodb.net/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  defaultImg: String,
  hoverImg: String,
  link: String,
});

const Product = mongoose.model('Product', productSchema);

// Order Schema
const orderSchema = new mongoose.Schema({
  products: Array,
  totalPrice: Number,
});

const Order = mongoose.model('Order', orderSchema);

// Routes
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/order', async (req, res) => {
  const { products, totalPrice } = req.body;
  const order = new Order({ products, totalPrice });
  await order.save();
  res.json(order);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
