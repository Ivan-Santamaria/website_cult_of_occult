// Importation d'Express
const express = require('express');
// Déclaration des chemin de stockage
const path = require('path');
// Importation du module helmet pour proteger les en-têtes
const helmet = require('helmet');
// Important de xss clean
// const xss = require('xss-clean');
// const clean = require('xss-clean/lib/xss').clean;
// will return "&lt;script>&lt;/script>"

// Importation de MongoDB
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// IMportation de mongo-sanitize pour des envoi vers la BDD
const mongoSanitize = require('express-mongo-sanitize');
//Importation des variables d'environement
const dotenv = require('dotenv');
require('dotenv').config();
// Importation de fs; servira pour la création automatique du folder "./images"
const fs = require('fs');
// Importation des routes
const userRoutes = require('./routes/User');
// const homeRoutes = require('./routes/home');
// const discographyRoutes = require('./routes/discography');

// Connexion vers MongoDB en récupérant les données dans le fichiers .env
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

// Creation application express
const app = express();

// Permet l'utilisation d'Helmet tout en partageant les ressources (erreur: CORS)
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    // ...
  })
);

// app.use(xss());

// Middleware appliqué à toutes les routes, permettant l'envoie de requête et d'accéder à l'API
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
  // Même principe de crossOriginResourcePolicy: false, sur helmet
  //res.setHeader("Cross-Origin-Resource-Policy", "same-site");
  next();
});

// bodyParser déprécié, utilisation de express.json suffisante
app.use(express.json());

// Pour éviter l'injection de code dans MongoDB
app.use(mongoSanitize());

// Créer un dossier folder s'il n'existe pas
const dir = './images';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Envoi des images vers le repertoire de stockage (images)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
app.use('/api/auth', userRoutes);
// app.use('/api/home', homeRoutes);
// app.use('/api/discography', discographyRoutes);

module.exports = app;
