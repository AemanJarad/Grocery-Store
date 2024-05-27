// initializeProducts.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://225060056:72022180978@cluster0.mnspxsd.mongodb.net/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  defaultImg: String,
  hoverImg: String,
  link: String,
});

const Product = mongoose.model('Product', productSchema);

const products = [
  {
    name: 'Blueberry Cheesecake Cup',
    price: 14.99,
    defaultImg: 'img/BlueberryCheesecakeCup.webp',
    hoverImg: 'img/HIGHRESBlueberryCheesecakeCupSpoon-Square01-green.webp',
    link: 'template.html?img=img/chocoholic1.webp',
  },
  {
    name: 'Chocolate Tart',
    price: 7.99,
    defaultImg: 'img/Chocolate-Tart-1.webp',
    hoverImg: 'img/Chocolate-Tart-2.webp',
    link: 'template.html?img=img/DutchTruffleCake1_2kg1.webp',
  },
  {
    name: 'Lemon Tart',
    price: 9.99,
    defaultImg: 'img/lemon-tart1.webp',
    hoverImg: 'img/lemon-tart2.webp',
    link: 'template.html?img=img/HIGHRESFruitandCustardCake-Square-greeen.jpg',
  },
];

Product.insertMany(products)
  .then(() => {
    console.log('Products added');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
