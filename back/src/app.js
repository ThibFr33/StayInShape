//import des paquets: express, morgan, cors,...
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const multer  = require('multer');
// const upload = multer({ dest: 'uploads/' });
const notFound = require('./middlewares/notFound');

//import du router
const router = require('./routes');

//création de l'app express
const app = express();
//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//récupétation des routes pour les utiliser à partir de : /api
app.use('/api', router);

//rendre accessible le dossier static via l'url
// app.use('/uploads', express.static('uploads'));

//si la page demandée par un utilisateur n'existe pas, affiche notFound 
app.use(notFound);

//exportation d'app
module.exports = app;