const express = require('express');
const path = require('path');
const helmet = require('helmet');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoSanitize = require('express-mongo-sanitize');
const dotenv = require('dotenv');
require('dotenv').config();
const fs = require('fs');
const showsRoutes = require('./routes/Shows');
const albumRoutes = require('./routes/Album');

mongoose
  .connect(
    `${process.env.MONGODB_URI}${process.env.MONGODB_USERNAME}${process.env.MONGODB_PASSWORD}${process.env.MONGODB_CLUSTERNAME}${process.env.MONGODB_DBNAME}${process.env.MONGODB_DBRETRYWHITE}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: false,
    // ...
  })
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );

  next();
});

app.use(express.json());

app.use(mongoSanitize());

const dir = './images';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
app.use('/api/shows', showsRoutes);
app.use('/api/albums', albumRoutes);

module.exports = app;
